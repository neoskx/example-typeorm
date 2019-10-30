import { BasePhoto } from "./BasePhoto";

export default class Photo extends BasePhoto {
    constructor(url: string, description: string, size: number) {
        super();
        this.url = url;
        this.description = description;
        this.size = size;
    }
}
