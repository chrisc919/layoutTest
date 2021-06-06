import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .box {
        background-color: var(--surface-e);
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
          0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
      }

      .box-stretched {
        height: 100%;
      }

      .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
        border-radius: 4px;
      }

      .nested-grid .p-col-4 {
        padding-bottom: 1rem;
      }
    `
  ]
})
export class AppComponent {
  title = 'layoutTest';
}
