import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpenCard';
  formValues:any={
    expence:70000,
    income:150000
  
  }
  isSticky:boolean=false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 200;
  
  }
  cardsList=[
    {
      title:"Quick Cash disbursment",
      capation:"Get terms loans that your business needs within 72 hrs",
      logo:"/assets/gpi.png"
    },
    {
      title:"Low-interest rate",
      capation:"Achieve your financial goals with an amazing interest rate starting at 13% per annum",
      logo:"/assets/low.png"
    }, {
      title:"Zero Paperwork",
      capation:"Get started instantly by submitting only your basic details & bank statements",
      logo:"/assets/secure.png"
    }
  ]

  cardList2:any[]=[ {
    title:"Ace your business finances",
    capation:"Manage banking, accounting & everything in between, on one platform",
    logo:"/assets/freelancer.png"
  }, {
    title:"Loans to fight COVID-19",
    capation:"Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh",
    logo:"/assets/Covid.png"
  }]
}
