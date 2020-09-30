import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tvshow } from 'src/app/shared/tvshow.model';
import { TvshowService } from 'src/app/shared/tvshow.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {

  constructor(public service: TvshowService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(TVs: Tvshow) {
    this.service.formData = Object.assign({}, TVs);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteTVshow(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'TV show');
      });
    }
  }

}
