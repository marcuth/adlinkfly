import axios from "axios"

import { AdLinkFlyResponse } from "./response"
import { ShortenParams } from "./interfaces"
import { AdLinkFlyError } from "./error"

export type AdLinkFlyOptions = {
    apiToken: string
    baseUrl: string
}

export type ShortenOptions = {
    url: string
    adsType: number
    alias?: string
    isTextFormat?: boolean
}

export class AdLinkFly {
    readonly baseUrl: string
    readonly apiToken: string

    constructor({ apiToken, baseUrl }: AdLinkFlyOptions) {
        this.baseUrl = baseUrl
        this.apiToken = apiToken
    }

    async shorten({
        url,
        alias,
        isTextFormat,
        adsType
    }: ShortenOptions): Promise<AdLinkFlyResponse> {

        const params: ShortenParams = {
            api: this.apiToken,
            url: url,
            alias: alias,
            type: adsType
        }

        if (isTextFormat) {
            params.format = "text"
        }

        const response = await axios.get(this.baseUrl, { params: params })
        const dataResponse = response.data

        if (response.status !== 200) {
            throw new AdLinkFlyError(
                `[Request Error] Status code: ${response.status}`)
        }

        if (dataResponse === "" || dataResponse.status === "error") {
            let message = dataResponse.message

            if (Array.isArray(message)) {
                message = message.join("")
            }

            throw new AdLinkFlyError(message)
        }

        return new AdLinkFlyResponse(dataResponse, isTextFormat ?? false)
    }
}
