import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Countri } from '../../Class/countri';
import { DataService } from '../../Servise/data.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent {
  data: any;
  //CN:   CON
  Condat: Countri = {
      id: undefined,
      name: '',
      iso2: '',
      iso3: '',
      totCities: ''
  }
  constructor(private SERV: DataService, private rt: Router) { }
  ngOnInit() {
    this.SHCOUNTRY();
  }
  SHCOUNTRY() {
    this.SERV.getCOUNTRY().subscribe(j => {
      console.log(j);
      this.data = j;
    });
  }
  inserCONTRY() {
    if (this.Condat.id === undefined) {
      this.SERV.postCOUNTRY(this.Condat).subscribe(c => {
        this.rt.navigate(['/COUNTRY']);
        this.SHCOUNTRY();
        this.Condat = {
          id: undefined,
          name: '',
          iso2: '',
          iso3: '',
          totCities: ''
        }
      });
    }
    else {
      this.Udp(this.Condat);
    }
    
  }
  onDEL(id: number) {
    this.SERV.deiEmp(id).subscribe(x => {
      this.rt.navigate(['/COUNTRY']);
      this.SHCOUNTRY();
    })
  }
  popolatfpr(ds: Countri) {
    this.Condat=ds
  }
  Udp(Condat: Countri) {
    this.SERV.upda(Condat).subscribe(x => {
      this.SHCOUNTRY();
    });
  }
}
