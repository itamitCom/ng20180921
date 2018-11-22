import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[courseTooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

    @HostBinding('class.tooltip-container')
    public tooltipContainer = true;

    @Input()
    public set courseTooltip(text: string) {
        if (!text) {
            return;
        }

        this._tooltipContext.textContent = text;
    }

    private _tooltipContext: HTMLSpanElement = this._renderer.createElement('span');

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef
    ) { }

    @HostListener('document:keyup.escape', ['$event'])
    public tooltipHide(_e: KeyboardEvent): void {
        console.log(_e);
        this.hide();
    }

    public ngOnInit() {
        this._tooltipContext.className = 'tooltiptext';
        this._renderer.appendChild(this._elementRef.nativeElement, this._tooltipContext);
    }

    public hide(): void {
        this._tooltipContext.classList.remove('open');
    }

    public show(): void {
        this._tooltipContext.classList.add('open');
    }
}
