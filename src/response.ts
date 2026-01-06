import { AdLinkFlyError } from "./error"

export class AdLinkFlyResponse {
    constructor(readonly data: any, private readonly isTextFormat: boolean) { }

    get shortenedUrl(): string {
        if (this.isTextFormat) {
            throw new AdLinkFlyError("It is not possible to get this data because you passed 'isTextFormat' as true")
        }

        const shortenedUrl = this.data.shortenedUrl || this.data.result.shorten_url

        if (!shortenedUrl) {
            throw new AdLinkFlyError("This data cannot be retrieved because the response does not contain the shortened URL or the property is unknown; please log \".data\".")
        }

        return shortenedUrl
    }

    get status(): string {
        if (this.isTextFormat) {
            throw new AdLinkFlyError("It is not possible to get this data because you passed 'isTextFormat' as true")
        }

        return this.data.status
    }

    get message(): string {
        if (this.isTextFormat) {
            throw new AdLinkFlyError("It is not possible to get this data because you passed 'isTextFormat' as true")
        }

        if ("message" in this.data) {
            return this.data.message
        }

        return ""
    }
}