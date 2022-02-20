import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-examinee',
  templateUrl: './examinee.component.html',
  styleUrls: ['./examinee.component.css']
})
export class ExamineeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
