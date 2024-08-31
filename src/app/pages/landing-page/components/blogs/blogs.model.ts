export interface ImageDTO {
    TypeImage: number;
    Value: string;
    FileName: string;
    FileType: string;
    Extension: string;
    ImageByte?: any;
  }
  
  export interface Blog {
    Id: string;
    VersionDataId: string;
    LanguageAbbreviation: string;
    Title: string;
    Brief: string;
    Content: string;
    Date: string;
    ImageDTO: ImageDTO;
  }
  