interface Params {
    learningLang: string;
    userLang: string;
    category: string;
    numOfWords: number;
}

export class contentBuilder {
    private params: Params;
    private content: string;

    constructor() {
        this.params = {
            learningLang: "en",
            userLang: "pt-br",
            category: " ",
            numOfWords: 5
        };

        this.content = `${this.params.numOfWords} random ${this.params.category} words in ${this.params.learningLang} translated to ${this.params.userLang} and how to pronounce`;
    }

    setLearningLang(learningLang: string): contentBuilder {
        this.params.learningLang = learningLang;
        return this;
    }
    
    setUserLang(userLang: string): contentBuilder {
        this.params.userLang = userLang;
        return this;
    }
    
    setCategory(category: string): contentBuilder {
        this.params.category = category;
        return this;
    }
    
    setNumOfWords(numOfWords: number): contentBuilder {
        this.params.numOfWords = numOfWords;
        return this;
    }
    
    build(): string {
        this.content = `${this.params.numOfWords} random ${this.params.category} words in ${this.params.learningLang} translated to ${this.params.userLang} and how to pronounce`

        return this.content;
    }
}