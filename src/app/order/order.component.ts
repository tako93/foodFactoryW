import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../core/firestore.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  title: string = 'account template string';
  list: Array<any> = [];

  constructor(private fireStore: FireStoreService) {}

  ngOnInit(): void {
    console.log('Account ngOnInit');
    this.loadData();
  }

  loadData() {
    this.fireStore.getCollection('order').subscribe((task) => {
      this.list = task;
    });
  }

  async onAddItem() {
    this.fireStore
      .createItem('order', {
        completed: false,
        title: 'Super Title',
      })
      .then((task) => {});
  }

  async onRemove(id: string) {
    console.log('ID to remove', id);
    const task = await this.fireStore.removeItemById('order', id);
    console.log(task);
  }

  ngOnDestroy(): void {
    console.log('Account ngOnDestroy');
  }
}