import { Component, OnInit } from '@angular/core';
import { MonacoEditorConstructionOptions, MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import { RuntimeServiceService } from 'src/app/services/global/runtime-service.service';
import { ToastQueueService } from 'src/app/services/global/toast-queue.service';
import { Message, TestMessages } from 'src/app/models/message.interface';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-editor-page',
    templateUrl: './editor-page.component.html',
    styleUrls: ['./editor-page.component.scss']
})
export class EditorPageComponent implements OnInit {
    editorOptions: MonacoEditorConstructionOptions = {
        theme: 'vs-dark',
        language: 'javascript',
        roundedSelection: true,
        autoIndent: 'full',
        automaticLayout: true
    };
    code = 'function x() {\nconsole.log("Hello world!");\n}\nx()\n'
    syntaxHighlightLanguage = 'javascript';
    language = 'javascript';
    consoleSubscription: any;
    outputSubscription: any;
    consoleList: Message[] = TestMessages;
    outputList: Message[] = TestMessages;
    consoleWindowInput = '';

    constructor(private toastQueueService: ToastQueueService,
        private runtimeServiceService: RuntimeServiceService,
        private datePipe: DatePipe) { }

    sendCodeToRunner(input: string = '') {
        if (this.language == 'javascript') {
            this.runJavaScript(input);
        }
    }

    runJavaScript(input: string = '') {
        if (input == '') {
            input = this.code;
        }
        var code = "try {\n" + input + "\n} catch (error) {\nthis.runtimeServiceService.addConsoleSubject({ message: `${error}`, type: 'error', from: 'EditorCode' });\nconsole.error(error);\n}";
        try {
            eval(code);
        } catch (error) {
            console.error(error);
            var errorText = `${error}`;
            console.log("aaaaa")
            this.runtimeServiceService.addConsoleSubject({ message: errorText, type: 'error', from: 'EditorCode' });
            //this.toastQueueService.showToast(errorText, 'error', 0);
        }
    }

    syntaxHighlightLanguageChanged() {
        this.editorOptions = { ...this.editorOptions, language: this.syntaxHighlightLanguage };
    }

    ngOnInit(): void {
        this.consoleSubscription = this.runtimeServiceService.consoleSubjectValue$.subscribe((value) => {
            console.log([...value]);
            this.consoleList = [...value].reverse();
            console.log([...this.consoleList]);
            // this.consoleList = TestMessages;
        });
        this.outputSubscription = this.runtimeServiceService.outputSubjectValue$.subscribe((value) => {
            this.outputList = [...value].reverse();
            // this.outputList = TestMessages;
        });
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.runtimeServiceService.addConsoleSubject({ message: this.consoleWindowInput, type: 'info', from: 'Console' });
            this.sendCodeToRunner(this.consoleWindowInput);
            this.consoleWindowInput = '';
        }
    }

    logCode() {
        var logText = '';
        this.code.split('\n').forEach((line, index) => {
            logText += `${line}\\n`;
        });
        console.log(logText);

    }

    log(value: string = "") {
        console.log(value);
        this.runtimeServiceService.addConsoleSubject({ message: value, type: 'info', from: 'Log', datetimeTimestamp: this.datePipe.transform(Date.now(), 'HH:mm:ss.SSS') });
    }

    warn(value: string = "") {
        console.warn(value);
        this.runtimeServiceService.addConsoleSubject({ message: value, type: 'warning', from: 'Warn', datetimeTimestamp: this.datePipe.transform(Date.now(), 'HH:mm:ss.SSS') });
    }

    error(value: string = "") {
        console.error(value);
        this.runtimeServiceService.addConsoleSubject({ message: value, type: 'error', from: 'Error', datetimeTimestamp: this.datePipe.transform(Date.now(), 'HH:mm:ss.SSS') });
    }

    formatMessage(message: Message) {
        if (message.datetimeTimestamp == undefined || message.datetimeTimestamp == null || message.datetimeTimestamp == '') {
            if (message.from == undefined) {
                return `${message.message}`;
            }
            return `${message.from}: ${message.message}`;
        }
        else if (message.from == undefined) {
            return `${message.datetimeTimestamp} - ${message.message}`;
        }
        return `${message.datetimeTimestamp} - ${message.from}: ${message.message}`;
    }

    editorInit(editor: MonacoStandaloneCodeEditor) {
        // Programatic content selection example
        editor.setSelection({
            startLineNumber: 1,
            startColumn: 1,
            endColumn: 50,
            endLineNumber: 3
        });
    }

}
