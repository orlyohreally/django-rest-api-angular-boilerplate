import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '@core/global-variables.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  staticUrl = this.globalVariablesService.staticUrl;
  constructor(private globalVariablesService: GlobalVariablesService) {}

  ngOnInit() {}
}
