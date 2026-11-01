import { Component, isStandalone } from '@angular/core';
import { empArr, studentArr, productArr, courseArr, bookArr, customerArr, orderArr, movieArr, teacherArr, vehicleArr } from './const/table';
import { Iemp, Istd, Iprod, Icourse, Ibook, Icust, Iorder, Imovie, Iteacher, Ivehicle  } from './models/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTableTask';

  empArr: Array<Iemp> = empArr
  studentArr : Array<Istd> = studentArr
  productArr : Array<Iprod> = productArr
  courseArr : Array<Icourse> = courseArr
  bookarr : Array<Ibook> = bookArr 
  customerArr : Array<Icust> = customerArr
  orderArr : Array<Iorder> = orderArr
  movieArr : Array<Imovie> = movieArr
  teacherArr : Array<Iteacher> = teacherArr
  vehicleArr : Array<Ivehicle> = vehicleArr

}
