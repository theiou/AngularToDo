import {Component, OnInit} from '@angular/core';
import {Task} from "./models/Task";
import {DataHandlerService} from "./services/data-handler.service";
import {Category} from "./models/Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularLesson';
  tasks: Task[];
  categories: Category[];
  private selectedCategory: Category = null;


  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    this.onSelectCategory(null);
  }

  onSelectCategory(category: Category) {
    this.selectedCategory = category;

    this.dataHandler.searchTasksByCategory(this.selectedCategory).subscribe(tasks => this.tasks = tasks);
  }

  onSelectedTask(task: Task) {
    console.log(task);
  }
}
