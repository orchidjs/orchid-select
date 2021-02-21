import { TomCreateFilter, TomCreate } from './index';

export type TomSettings = {
	options					: any[],
	optgroups				: any[],
	items					: any[],

	plugins					: any[],
	delimiter				: string,
	splitOn					: RegExp|string, // regexp or string for splitting up values from a paste command
	persist					: boolean,
	diacritics				: boolean,
	create					: boolean|TomCreate,
	createOnBlur			: boolean,
	createFilter			: RegExp|string|TomCreateFilter,
	highlight				: boolean,
	openOnFocus				: boolean,
	shouldOpen				: boolean,
	maxOptions				: number,
	maxItems				: number,
	hideSelected			: boolean,
	duplicates				: boolean,
	addPrecedence			: boolean,
	selectOnTab				: boolean,
	preload					: boolean|string,
	allowEmptyOption		: boolean,
	closeAfterSelect		: boolean,

	scrollDuration			: number,
	loadThrottle			: number,
	loadingClass			: string,

	dataAttr				: string, //'data-data',
	optgroupField			: string,
	valueField				: string,
	labelField				: string,
	disabledField			: string,
	optgroupLabelField		: string,
	optgroupValueField		: string,
	lockOptgroupOrder		: boolean,

	sortField				: string,
	searchField				: string[],
	searchConjunction		: string,
	nesting					: boolean,

	mode					: string,
	wrapperClass			: string,
	inputClass				: string,
	dropdownClass			: string,
	dropdownContentClass	: string,
	itemClass				: string,
	optionClass				: string,

	dropdownParent			: string,
	controlInput			: HTMLInputElement,

	copyClassesToDropdown	: boolean,

	placeholder				: string,

	load					: (value:string, callback:()=>any) => void,
	score					: (query:string) => () => any,
	onInitialize			: (evt:Event) => void,
	onChange				: (evt:Event) => void,
	onItemAdd				: (evt:Event) => void,
	onItemRemove			: (evt:Event) => void,
	onClear					: (evt:Event) => void,
	onOptionAdd				: (evt:Event) => void,
	onOptionRemove			: (evt:Event) => void,
	onOptionClear			: (evt:Event) => void,
	onOptionGroupAdd		: (evt:Event) => void,
	onOptionGroupRemove		: (evt:Event) => void,
	onOptionGroupClear		: (evt:Event) => void,
	onDropdownOpen			: (evt:Event) => void,
	onDropdownClose			: (evt:Event) => void,
	onType					: (evt:Event) => void,
	onLoad					: (evt:Event) => void,
	onFocus					: (evt:Event) => void,
	onBlur					: (evt:Event) => void,
	onDelete				: (values:string[], evt:KeyboardEvent|MouseEvent) => boolean,

	render					: {[key:string]:()=>string|HTMLElement}
};
