import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public data : any[]=[];

  constructor(private _history_service:HistoryService) { }

  ngOnInit(): void {
    this._history_service.getData()
        .subscribe(dt => this.data = dt)
  }

}