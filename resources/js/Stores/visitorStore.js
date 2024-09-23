import { defineStore } from 'pinia'
import Swal from "sweetalert2";
import { updateVisitor } from './urlService.js';  // assume axios instance in urlService.js

export const useVisitorStore = defineStore({
    id: 'visitor',

    state: () => ({
        visitor_type: '',
        visitor_number: '',
        background_color: '',
        gradient_start: '',
        gradient_end: '',
        font_color: '',
        count_color: '',
        icon_color: '',
        border_color: '',
        font_size: '',
        text_padding: '',
        border_size: '',
        border_radius: '',
        outside_top: '',
        outside_bottom: '',
        gradient_angle: '',
        color_option: '',
        font_family: '',
        align_visitor: '',
        counter_based: '',
        count_visitor: '',
        visitor_duration: '',
        visitor_icon: '',
        fontOptions: ['Inherit','Montserrat', 'Jost,sans-serif','Arial, sans-serif','Helvetic','Arial', 'Tahoma', 'Trebuchet MS', 'Times New Roman','Georgia','Garamond','Courier New'],
        alignOptions: ['Left', 'Center', 'Right'],
        counterBasedOptions: ['Store', 'Product'],
        countVisitorOptions: ['Live Visitors', 'Random Visitors'],
        visitorDurationOptions: ['5 minutes', '1 Hour', '2 Hours', '3 Hours', '6 Hours', '24 Hours (1 Day)', '48 Hours (2 Day)', '120 Hours (5 Day)', '240 Hours (10 Day)', '720 Hours (30 Day)'],
        visitorIconOptions: ['fa-eye', 'fa-coffee', 'fa-star','fa-user', 'fa-heart', 'fa-bolt','fa-fire','fa-truck','fa-check','fa-tags'],

        showModal: false,
        isSubmitting: false,
        initialState: null,
        processing: false,

    }),

    actions: {

        setInitData(widgetOptions) {
            const widgetOptionKeys = [
                'Visitor Type',
                'Visitor Number',
                'Background Color',
                'Gradient Start',
                'Gradient End',
                'Font Color',
                'Count Color',
                'Icon Color',
                'Border Color',
                'Text Padding',
                'Font Size',
                'Border Size',
                'Border Radius',
                'Outside Top',
                'Outside Bottom',
                'Gradient Angle',
                'Color Option',
                'Font Family',
                'Align Visitor',
                'Counter Based',
                'Count Visitor',
                'Visitor Duration',
                'Visitor Icon'
            ];

            widgetOptionKeys.forEach(optionKey => {
                const propertyKey = optionKey.toLowerCase().replace(/\s/g, "_");
                this[propertyKey] = widgetOptions[optionKey].option_value;
            });

            // Populate initial state
            this.initialState = {...this.$state}
        },

        setVisitorData(data) {
            Object.keys(data).forEach(key => {
                if(key in this) {
                    this[key] = data[key];
                }
            });
        },

        async submitForm() {
            this.processing = true;

            try {
                const response = await updateVisitor('/visitor/update', this.$state)
                console.log(response);
                this.showSuccessToast('Settings updated');
                this.initialState = {...this.$state} //after a successful form submission to hasChanges

            } catch (error) {
                console.log(error);

            } finally {
                this.processing = false;
                this.isSubmitting = false;
            }
        },
    },

    getters: {

        // replace a {{visitor_number}} to visitor_number
        visitorType: (state) => {
            return state.visitor_type.replace('{{visitor_number}}', `<span style="color: ${state.count_color}">${state.visitor_number}</span>`);
        },

        // check if form state is different from initial state
        hasChanges: (state) => {
            return state.initialState && Object.keys(state.$state).some(key => {
                return key !== 'initialState'
                    && key !== 'isSubmitting'
                    && key !== 'processing'
                    && state.initialState
                    && state.initialState[key] !== state.$state[key];
            });
        },

        //if changed in state can you discardChanges
        discardChanges: (state) => () => {
            const relevantKeys = Object.keys(state).filter(key =>
                key in state.initialState && key != 'initialState'
            );
            for (let key of relevantKeys) {
                state[key] = state.initialState[key];
            }

            state.processing = false;
            state.isSubmitting = false;

            return state;
        },

        //toast to submitForm
        showSuccessToast: () => (message) => {
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
            });
        }

    },
})

