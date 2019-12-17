import { Component, OnInit } from '@angular/core';
import { salesService} from '../salesService/salesService'
import { MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public salesService: salesService, private _snackBar: MatSnackBar) { }

  private quotes


  async ngOnInit() {
    const self = this
    this.salesService.getQuotes()
    .then(function (data) {
        self.quotes = data
    })
    .catch(function (error) {
      self._snackBar.open(error,"", {
        duration: 10000
      });
    })
  }

}
