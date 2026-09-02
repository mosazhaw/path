import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @Input() backendUrl!: string;
  @Input() modelPath!: string;
  @Input() translationsPath!: string;
  @Input() frontendVersion!: string;
  @Input() startPage!: string;
  @Input() currentUserForm!: string;

  ngAfterContentInit() {
    console.log("path-framework configuration (backend-url: ",
      this.backendUrl,
      ", model-path:",
      this.modelPath, 
      ", translations-path: ",
      this.translationsPath,
      ", frontend-version: ",
      this.frontendVersion,
      ", start-page: ",
      this.startPage,
      ", current-user-form: ",
      this.currentUserForm,")");
  }

}
