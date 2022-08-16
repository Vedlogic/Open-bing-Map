import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class callbtn implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;

	// Value of the field is stored and used inside the control
	private _value: string = "";	

	// PowerApps component framework framework delegate which will be assigned to this object which would be called whenever an update happens.
	private _notifyOutputChanged: () => void;

	// label element created as part of this control
	private _label: any;

	// button element created as part of this control
	private button: HTMLButtonElement;

	// reference to the control container HTMLDivElement
	// This element contains all elements of our custom control example
	private _container: HTMLDivElement;
 
	//custome html
	private parentdiv : HTMLDivElement;

    constructor()
    {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // Add control initialization code
		this._context = context; // set the context
		debugger;
		this.button = document.createElement("button");
		// Get the localized string from localized string
		this._label = context.parameters.btnLabel.raw;	

		// this.parentdiv = document.createElement("div");
		// var ifrm = document.createElement("iframe")
		// this.parentdiv.appendChild(ifrm);
		// ifrm.setAttribute("id","ifrmbingmap");
		// ifrm.setAttribute("src","");

		this.button.innerHTML = this._label.toString();

		this._notifyOutputChanged = notifyOutputChanged;
		this.button.addEventListener("click", this.onButtonClick.bind(this));
        this._container = document.createElement("div");
		this._container.appendChild(this.button);
		container.appendChild(this._container);

    }

	private onButtonClick(event: Event): void {
		//this._value = this._context.parameters.btnPurpose.raw;
		this._value = "true";
		this._notifyOutputChanged();
	}

    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        this._context = context; // set the context    
		this._label = context.parameters.btnLabel.raw;
		this.button.innerHTML = this._label.toString();
    }

   
    public getOutputs(): IOutputs
    {
        let result: IOutputs = {
			btnValue: this._value
		};
		return result;
    }


    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
