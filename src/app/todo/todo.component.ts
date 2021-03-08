import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbDateStruct }  from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 model: NgbDateStruct;
 tasklists: Array<{'taskname': string, 'date': string}> = [];

 isShowTask: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("taskLists") !== null) {
    this.tasklists = JSON.parse(localStorage.getItem("taskLists"))
   } ;
  }

  addToTask(task: string, date: string) {
      //console.log(task);
      this.tasklists.push({'taskname': task, 'date': date});
      localStorage.setItem("taskLists", JSON.stringify(this.tasklists));
  }

  onShowTask() {
    this.isShowTask = !this.isShowTask;
  }

  onClickDelete(selectedItem: any) {
     let index: number = 0;
     //console.log(selectedItem);
     index = this.tasklists.indexOf(selectedItem)

    this.tasklists.splice(index, 1);
    localStorage.setItem("taskLists", JSON.stringify(this.tasklists))
  }



}

