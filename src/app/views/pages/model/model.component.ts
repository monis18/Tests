import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData{
  model: string,
  name: string,
  email: string,
  comment: string
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  public modelo: string;
  public formFinal: FormGroup;
  public error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => this.modelo = id );

    this.formFinal = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required],
    });
     
  }
  validateForm(){
    this.formFinal.markAllAsTouched();
    if(this.formFinal.invalid){
      this.error = true;
    }else{
      this.error = false
      this.openDialog();
    }
  }

  openDialog(): void {
    const nombre = this.formFinal.get('name').value;
    const correo = this.formFinal.get('email').value;
    const comentario = this.formFinal.get('comment').value;
    this.dialog.open(DialogModelExample, {
      width: '70vh',
      data:{
        model: this.modelo,
        name: nombre,
        email: correo,
        comment: comentario
      }
    });
  }

}

@Component({
  selector: 'dialog-model',
  templateUrl: 'dialog-model.html',
})
export class DialogModelExample {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<DialogModelExample>
  ) {}

  close(){
    this.dialogRef.close();
  }
}
