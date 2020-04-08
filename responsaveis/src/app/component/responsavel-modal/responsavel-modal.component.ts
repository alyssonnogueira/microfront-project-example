import { Component, OnInit, Inject } from '@angular/core';
import { Responsavel } from 'src/app/model/responsavel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-responsavel-modal',
  templateUrl: './responsavel-modal.component.html',
  styleUrls: ['./responsavel-modal.component.css']
})
export class ResponsavelModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResponsavelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Responsavel) { }


  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit() {
  }

}
