import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Styling, DefaultScenes, DefaultStory } from '../../../data/media'

@Component({
    selector: 'app-visual-novel',
    templateUrl: './visual-novel.component.html',
    styleUrl: './visual-novel.component.scss'
})
export class VisualNovelComponent implements OnInit {
    @Input() scenes: any = DefaultScenes;
    @Input() story: any = DefaultStory;
    @Input() styling: any = Styling;
    @Input() currentScene: string = "-1";
    @Input() variables: any = { ...DefaultStory["variables"] };

    @Output() savingEvent = new EventEmitter<any>();

    slide: any;
    showSaveIcon: boolean = this.story["showSaveButton"];

    emitSavingEvent() {
        this.savingEvent.emit({ "variables": this.variables, "currentScene": this.currentScene });
    }

    constructor() { }

    ngOnInit(): void {
        if (this.currentScene == "-1") {
            this.currentScene = this.story.startScene;
            if (this.currentScene == "-1") {
                // if startscene is not defined
                this.currentScene = "1";
                this.slide = this.story.slides[this.currentScene];
            } else {
                this.slide = this.story.slides[this.currentScene];
            }
        } else {
            this.slide = this.story.slides[this.currentScene];
        }
        console.log(this.slide);
    }

    showChoices() {
        return this.slide.type == "choice";
    }

    getText() {
        return this.slide.text;
    }

    getAllChoices() {
        return this.slide.choises;
    }

    clickChoice(next: string = "-1") {
        if (next == "-1") {
            this.currentScene = this.slide.next;
        } else {
            this.currentScene = next;
        }
        this.slide = this.story.slides[this.currentScene];
    }

    runNextSlide() {

    }

    getStyling(option: any = "next"): { [key: string]: string | number } {
        if (option == "next") {
            if (this.slide["style"] != undefined) {
                return this.styling["styles"][this.slide["style"]];
            } else {
                return this.styling["styles"][this.styling["default"]["nextSlide"]];
            }
        } else {
            if (option["style"] != undefined) {
                return this.styling["styles"][option["style"]];
            } else {
                return this.styling["styles"][this.styling["default"]["choices"]];
            }
        }



        return {}
    }
}