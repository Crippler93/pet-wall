// TODO: Complete Form Builder
type FormElementType = 'input' | 'label' | 'select' | 'textarea' | 'button' | 'fieldset' | 'legend' | 'datalist' | 'output' | 'option' | 'optgroup'
type HTMLAttributes = {string: string} | {}

export class FormElement {
  type: FormElementType
  value = ''
  attributes = {}

  constructor(type: FormElementType, value: string, attributes: HTMLAttributes) {
    this.type = type
    this.value = value
    this.attributes = attributes
  }
}
