import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-demo',
    templateUrl: 'dist/demos/ngb/modal.html'
})
export class ModalDemo {

    closeResult: string;

    constructor(private modalService: NgbModal) { }

    open(content: any) {
        this.modalService.open(content, { size: 'sm', backdrop: 'static' }).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        )
    }

    private getDismissReason(reason: any) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return  `with: ${reason}`;
        }
    }
}