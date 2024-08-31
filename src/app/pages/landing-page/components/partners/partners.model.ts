interface ImageDTO {
    TypeImage: number;
    Value: string;
    FileName: string;
    FileType: string;
    Extension: string;
    ImageByte: string | null;
}

export interface Partners {
    Id: string;
    VersionDataId: string;
    LanguageOfSiteId: string;
    LanguageAbbreviation: string;
    PartnershipName: string;
    ImageDTO: ImageDTO;
}
