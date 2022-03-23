import { Directive,HostListener,HostBinding, Output,EventEmitter, OnInit } from '@angular/core'

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    @HostBinding('class.show') isOpen=false;

    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
        this.dropDownMenu.emit(this.isOpen);
    }

    @Output() dropDownMenu=new EventEmitter<boolean>(false);
    ngOnInit(): void {
        
    }
}