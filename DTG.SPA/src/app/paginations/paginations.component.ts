import { Component, OnInit, Output, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnChanges {
  @Input('total-items') totalItems;
	@Input('page-size') pageSize = 10;
	@Output('page-changed') pageChanged = new EventEmitter();
	pages: any[];
	currentPage = 1; 

	ngOnChanges(){
    this.currentPage = 1;
        
		var pagesCount = Math.ceil(this.totalItems / this.pageSize); 
		this.pages = [];
		for (var i = 1; i <= pagesCount; i++)
			this.pages.push(i);

    console.log(this);
	}

	changePage(page){
		this.currentPage = page; 
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.pageChanged.emit(this.currentPage);
	}

	next(){
		if (this.currentPage == this.pages.length)
			return; 
		
		this.currentPage++;
    console.log("next", this);
		this.pageChanged.emit(this.currentPage);
	}
}

