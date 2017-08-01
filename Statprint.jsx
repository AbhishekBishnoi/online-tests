import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';

import { browserHistory } from 'react-router';
import filter from 'lodash/filter';
import SideMenu from './SideMenu.jsx';
import Feed from 'semantic-ui-react/dist/commonjs/views/Feed';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';

import OpenFinNewWindow from '../../components/OpenFinNewWindow.jsx';

import axios from 'axios';
import Constants from '../../utils/Constants.jsx';
import DashboardStore from '../../stores/Dashboard.jsx';
import DashboardActions from '../../actions/Dashboard.jsx';

export default class Statprint extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getPropsfromStores();
        this.onChange = this.onChange.bind(this);
    }

    getPropsfromStores() {
        return {
            ...DashboardStore.getState()
        }
    }

    render(
         (
             <div>
                testing child html
             </div>
         ),
         document.querySelector('#stat')
     );
}
