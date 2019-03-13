import { Component } from '@angular/core';

//Two-way binding
@Component({
  selector: 'app-root',
  template: `
            <h4>NgIf</h4>
            <tr *ngFor="let policy of policies; let i = index">
                <td>Index: {{i}}</td>
                <td>{{policy.name}}</td>
            </tr>
            `
})

export class AppComponent {
  policies: any[] = [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"},
  ];
}



