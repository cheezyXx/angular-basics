import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
})
export class InvoiceListComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log("Hey I am called on the beginning");
  }

  ngOnDestroy() {
    console.log("Hey I am called on destroy");
  }
}
