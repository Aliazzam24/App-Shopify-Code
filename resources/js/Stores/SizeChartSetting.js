import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue';
import Swal from "sweetalert2";

export const useSizeChartSettingStore = defineStore('sizeChartSetting', {
    state: () => ({

        chart_icon: ref(''),
        chart_border: ref(''),

        chart_top: ref(''),
        chart_bottom: ref(''),
        chart_text: ref(''),

        chart_background_color: ref(''),
        chart_text_color: ref(''),
        chart_border_color: ref(''),
        chart_row_background_color: ref(''),
        chart_border_thickness: ref(''),

        borderThicknessOptions: ref([
            {label: 'Thine', value: 'thine'},
            {label: 'Regular', value: 'regular'},
            {label: 'Bold', value: 'bold'},
        ]),

        icons: ref([
            {
                value: 'ruler',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/ruler2.svg" alt="Ruler">',
            },
            {
                value: 'measuring tape',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/ruler.svg" alt="Measuring Tape">',
            },
            {
                value: 'measure',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/measure.svg" alt="Measure">',
            },
            {
                value: 'mannequin',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/mannequin.svg" alt="Mannequin">',
            },
            {
                value: 'tshirt',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/tshirt.svg" alt="Tshirt">',
            },
            {
                value: 'hanger',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/hanger.svg" alt="Hanger">',
            },
            {
                value: 'no icon',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/button_icon/no-icon.svg" alt="No icon">',
            },
        ]),
        borders: ref([
            {
                value: 'Horizontal borders',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/table_style/1.svg" alt="Horizontal borders" style="min-width: 100%">',
            },
            {
                value: 'Vertical borders',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/table_style/2.svg" alt="Vertical borders" style="min-width: 100%">',
            },
            {
                value: 'Simple',
                src: '<img src="https://cdn-sf.vitals.app/cdn-assets/size_chart/table_style/3.svg" alt="Simple" style="min-width: 100%">',
            },
        ]),

        //modal
        active: ref(false),
        modalDuplicate: ref(false),
        modalTitle: ref(''),
        modalContent: ref(''),
        primaryAction: ref({ content: '', onAction: () => {} }),
        secondaryActions: ref([]),

        processing: ref(false),
        isSubmitting: ref(false),
        initialData: ref(false),




        showBorderColorPicker: ref(false),
        showTextColorPicker: ref(false),
        showRowBackgroundColorPicker: ref(false),
        showBackgroundColorPicker: ref(false),
        svgIcon: ref(false),

        infoIcon: ref(`<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"></path><path d="M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>`),


    }),

    actions: {

        setInitData(widgetOptions) {
            this.chart_icon = widgetOptions['Chart Icon']?.option_value || '';
            this.chart_border = widgetOptions['Chart Border']?.option_value || '';
            this.chart_top = widgetOptions['Chart Top']?.option_value || '';
            this.chart_bottom = widgetOptions['Chart Bottom']?.option_value || '';
            this.chart_text = widgetOptions['Chart Text']?.option_value || '';
            this.chart_background_color = widgetOptions['Chart Background Color']?.option_value || '#ffffff';
            this.chart_text_color = widgetOptions['Chart Text Color']?.option_value || '#ffffff';
            this.chart_border_color = widgetOptions['Chart Border Color']?.option_value || '#ffffff';
            this.chart_row_background_color = widgetOptions['Chart Row Background Color']?.option_value || '#ffffff';
            this.chart_border_thickness = widgetOptions['Chart Border Thickness']?.option_value || '';

            // Deep clone the state to store initial data for comparison later
            this.initialData = JSON.parse(JSON.stringify(this.$state));
        },

        setSizeChartData(data) {
            Object.keys(data).forEach(key => {
                if (key in this) {
                    this[key] = data[key]; // Update state if the key exists
                }
            });
        },


        handleSubmit() {
            this.processing = true;

            // Use the state directly in the axios request
            axios.put('/update-setting-size-charts', this.$state)
                .then(response => {
                    console.log('Successfully updated:', response.data);
                    this.Toast('Settings updated');
                    this.initialData = JSON.parse(JSON.stringify(this.$state));

                    this.isSubmitting = false;
                    this.processing = false;

                    //Invoke onSuccess function after successful submission
                    if(this.onSuccess) {
                        this.onSuccess();
                        window.location.reload(); //reload the page preserving scroll position
                    }

                })
                .catch(error => {
                    console.log('Error updating size chart:', error);
                    if(this.onError) {
                        this.onError(error);
                    }
                });
        },


        hasChanges() {
            return (
                this.chart_icon !== this.initialData.chart_icon ||
                this.chart_border !== this.initialData.chart_border ||
                this.chart_top !== this.initialData.chart_top ||
                this.chart_bottom !== this.initialData.chart_bottom ||
                this.chart_text !== this.initialData.chart_text ||
                this.chart_background_color !== this.initialData.chart_background_color ||
                this.chart_text_color !== this.initialData.chart_text_color ||
                this.chart_border_color !== this.initialData.chart_border_color ||
                this.chart_row_background_color !== this.initialData.chart_row_background_color ||
                this.chart_border_thickness !== this.initialData.chart_border_thickness
            );
        },
        discardChanges() {
            if (!this.initialData) return;

            this.chart_icon = this.initialData.chart_icon;
            this.chart_border = this.initialData.chart_border;
            this.chart_top = this.initialData.chart_top;
            this.chart_bottom = this.initialData.chart_bottom;
            this.chart_text = this.initialData.chart_text;
            this.chart_background_color = this.initialData.chart_background_color;
            this.chart_text_color = this.initialData.chart_text_color;
            this.chart_border_color = this.initialData.chart_border_color;
            this.chart_row_background_color = this.initialData.chart_row_background_color;
            this.chart_border_thickness = this.initialData.chart_border_thickness;

            // Reset submission and processing state
            this.isSubmitting = false;
            this.processing = false;
        },
        showDiscardModal() {
            this.showBorderColorPicker = false;
            this.showTextColorPicker = false;
            this.showRowBackgroundColorPicker = false;
            this.showBackgroundColorPicker = false;

            this.primaryAction = {
                content: 'Discard changes',
                destructive: true,
                onAction: () => {
                    this.discardChanges()
                    this.active = false;
                },
            };
            this.secondaryActions = [{ content: 'Continue editing', onAction: () => this.active = false }];
            this.modalTitle = 'Discard all unsaved changes';
            this.modalContent = 'If you discard changes, you\'ll delete any edits you made since you last saved.';
            this.active = true;
        },

        selectIcon(iconValue) {
            this.chart_icon = iconValue;
        },

        selectBorder(borderValue) {
            this.chart_border = borderValue;
        },

        toggleBorderColorPicker() {
            this.showTextColorPicker = false;
            this.showRowBackgroundColorPicker = false;
            this.showBackgroundColorPicker = false;
            this.showBorderColorPicker = !this.showBorderColorPicker;
        },
        toggleTextColorPicker() {
            this.showBorderColorPicker = false;
            this.showRowBackgroundColorPicker = false;
            this.showBackgroundColorPicker = false;
            this.showTextColorPicker = !this.showTextColorPicker;
        },
        toggleRowBackgroundColorPicker() {
            this.showBorderColorPicker = false;
            this.showTextColorPicker = false;
            this.showBackgroundColorPicker = false;
            this.showRowBackgroundColorPicker = !this.showRowBackgroundColorPicker;
        },
        toggleBackgroundColorPicker() {
            this.showBorderColorPicker = false;
            this.showTextColorPicker = false;
            this.showRowBackgroundColorPicker = false;
            this.showBackgroundColorPicker = !this.showBackgroundColorPicker;
        },
    },

    getters: {
        Toast: () => (message) => {
            Swal.fire({
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000,
                timerProgressBar: true,
                title: message,
                background: '#1a1a1a',
                color: '#FFFFFF',
                width: '217px',
                padding: '6px',
                showClass:{
                    popup:'animate__slideIn'
                }
            });
        }
    },

});
