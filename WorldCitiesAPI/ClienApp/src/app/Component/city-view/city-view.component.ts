import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../../Class/city';
import { DataService } from '../../Servise/data.service';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent {
  data: any;
  Ct:City = {
      id: undefined,
      name: '',
      lat: 0,
      lon: 0,
      countryId: 0,
      countryName: ''
  }
  constructor(private SERV: DataService, private rt: Router) { }
  ngOnInit() {
    this.SHCITY();
  }
  SHCITY() {
    this.SERV.getClities().subscribe(j => {
      console.log(j);
      this.data = j;
    });
  }
  onDEL(id: number) {
    this.SERV.deLClities(id).subscribe(x => {
      this.rt.navigate(['/CT']);
      this.SHCITY();
    })
  }
  inserCyty() {
    this.SERV.postCity(this.Ct).subscribe(j => {
      console.log(j);
      this.rt.navigate(['/CT']);
      this.SHCITY();

    })
  }
}
