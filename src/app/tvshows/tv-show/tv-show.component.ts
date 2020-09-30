import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TvshowService } from 'src/app/shared/tvshow.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  constructor(public service: TvshowService, public toastr: ToastrService) { }//was private

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();
    this.service.formData = {
      ShowID: null,
      Showname: '',
      Genre: '',
      SeasonNum: null,
      ReleaseDate: null
    }

  }


  onSubmit(form: NgForm) {
    if (form.value.ShowID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTVshow(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'TV show');
      this.resetForm(form);
     this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putTVshow(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'TV show');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
