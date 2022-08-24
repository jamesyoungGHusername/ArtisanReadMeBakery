class SectionData{
    constructor(title,description){
        this.title=title || defaults.title;
        this.description=description || defaults.description;
    }
    addImage(pathToImage,altText){
        this.description+=("\n* ["+altText+"]("+pathToImage+")");
    }
    addTextToDescrip(textToAdd){
        this.description+=textToAdd;
    }
}

const defaults={
    title:"",
    description:""
}