import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Task} from "../../models/Task";

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  dialogTitle: string;
  task: Task;

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA)private data: [Task, string],
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    console.log(this.task);
  }

}
