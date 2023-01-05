import { Link } from "react-router-dom";
//import Product from "../products/Product";
//import ProductH from "../products/ProductH";
import Productcard from "../components/productcard/Productcard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import Util from "../util/util";
import Spinner from "../util/spinner";
import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import s from './OrderConfirmPage.css'

function OrderConfirmPage(props){

  const [fdata, setFdata] = useState({
    billing_first_name: '',
    billing_last_name: '',
    billing_street_aadress: '',
    billing_city: '',
    billing_postcode: '',
    billing_country: '',
    billing_state: '',
    billing_phone: '',
    delivery_first_name: '',
    delivery_last_name: '',
    delivery_street_aadress: '',
    delivery_city: '',
    delivery_postcode: '',
    delivery_country: '',
    delivery_state: '',
    delivery_phone: '',
    currency_id: '',
    language_id: '',
    session_id: '',
    payment_method: '',
    latlong: '',
    payment_id: '',
    cc_cvc: '',
    cc_expiry_month: '',
    cc_expiry_year: '',
    cc_number: '',
  })

    function handleStateChange(fieldName, fieldValue) {
      setFdata({ ...fdata, [fieldName]: fieldValue})
      console.log(fdata)
    }

    const apiCall = async () => {
      fdata['delivery_street_aadress'] = fdata.billing_street_aadress;
      const config = {
        method: 'POST',
            url: "http://admin.paanika.com/api/client/order",
            headers: {
              'clientsecret': 'sk_1234', 
              'clientid': '1234',
              'Access-Control-Allow-Origin': '*'
          },
            data : fdata ? fdata : ''
      }
      
      const result = await axios(config)
        .then(
        response => response.data 
        )
        .then((data)=>{
        console.log(data)
        })
        .catch(e => console.log(e));
    
    }

    return (
        <>
        <div class="ordercontainer">
          <div class="title-order">
              <h2>Complete My Order</h2>
          </div>
        <div class="d-flex-order">
        <form action="" method="" class="form-order">
            <label class="label-order">
              <span class="fname">First Name <span class="required">*</span></span>
              <input type="text" name="fname" class="order-input" onChange={e => handleStateChange("billing_first_name", e.target.value)}/>
            </label>
            <label class="label-order">
              <span class="lname">Last Name <span class="required">*</span></span>
              <input type="text" name="lname" class="order-input" onChange={e => handleStateChange("billing_last_name", e.target.value)}/>
            </label>
            <label class="label-order">
          <span>Country <span class="required">*</span></span>
          <select name="selection" class="order-select">
            <option value="select">Select a country...</option>
            <option value="AFG">Afghanistan</option>
            <option value="ALA">Åland Islands</option>
            <option value="ALB">Albania</option>
            <option value="DZA">Algeria</option>
            <option value="ASM">American Samoa</option>
            <option value="AND">Andorra</option>
            <option value="AGO">Angola</option>
            <option value="AIA">Anguilla</option>
            <option value="ATA">Antarctica</option>
            <option value="ATG">Antigua and Barbuda</option>
            <option value="ARG">Argentina</option>
            <option value="ARM">Armenia</option>
            <option value="ABW">Aruba</option>
            <option value="AUS">Australia</option>
            <option value="AUT">Austria</option>
            <option value="AZE">Azerbaijan</option>
            <option value="BHS">Bahamas</option>
            <option value="BHR">Bahrain</option>
            <option value="BGD">Bangladesh</option>
            <option value="BRB">Barbados</option>
            <option value="BLR">Belarus</option>
            <option value="BEL">Belgium</option>
            <option value="BLZ">Belize</option>
            <option value="BEN">Benin</option>
            <option value="BMU">Bermuda</option>
            <option value="BTN">Bhutan</option>
            <option value="BOL">Bolivia, Plurinational State of</option>
            <option value="BES">Bonaire, Sint Eustatius and Saba</option>
            <option value="BIH">Bosnia and Herzegovina</option>
            <option value="BWA">Botswana</option>
            <option value="BVT">Bouvet Island</option>
            <option value="BRA">Brazil</option>
            <option value="IOT">British Indian Ocean Territory</option>
            <option value="BRN">Brunei Darussalam</option>
            <option value="BGR">Bulgaria</option>
            <option value="BFA">Burkina Faso</option>
            <option value="BDI">Burundi</option>
            <option value="KHM">Cambodia</option>
            <option value="CMR">Cameroon</option>
            <option value="CAN">Canada</option>
            <option value="CPV">Cape Verde</option>
            <option value="CYM">Cayman Islands</option>
            <option value="CAF">Central African Republic</option>
            <option value="TCD">Chad</option>
            <option value="CHL">Chile</option>
            <option value="CHN">China</option>
            <option value="CXR">Christmas Island</option>
            <option value="CCK">Cocos (Keeling) Islands</option>
            <option value="COL">Colombia</option>
            <option value="COM">Comoros</option>
            <option value="COG">Congo</option>
            <option value="COD">Congo, the Democratic Republic of the</option>
            <option value="COK">Cook Islands</option>
            <option value="CRI">Costa Rica</option>
            <option value="CIV">Côte d'Ivoire</option>
            <option value="HRV">Croatia</option>
            <option value="CUB">Cuba</option>
            <option value="CUW">Curaçao</option>
            <option value="CYP">Cyprus</option>
            <option value="CZE">Czech Republic</option>
            <option value="DNK">Denmark</option>
            <option value="DJI">Djibouti</option>
            <option value="DMA">Dominica</option>
            <option value="DOM">Dominican Republic</option>
            <option value="ECU">Ecuador</option>
            <option value="EGY">Egypt</option>
            <option value="SLV">El Salvador</option>
            <option value="GNQ">Equatorial Guinea</option>
            <option value="ERI">Eritrea</option>
            <option value="EST">Estonia</option>
            <option value="ETH">Ethiopia</option>
            <option value="FLK">Falkland Islands (Malvinas)</option>
            <option value="FRO">Faroe Islands</option>
            <option value="FJI">Fiji</option>
            <option value="FIN">Finland</option>
            <option value="FRA">France</option>
            <option value="GUF">French Guiana</option>
            <option value="PYF">French Polynesia</option>
            <option value="ATF">French Southern Territories</option>
            <option value="GAB">Gabon</option>
            <option value="GMB">Gambia</option>
            <option value="GEO">Georgia</option>
            <option value="DEU">Germany</option>
            <option value="GHA">Ghana</option>
            <option value="GIB">Gibraltar</option>
            <option value="GRC">Greece</option>
            <option value="GRL">Greenland</option>
            <option value="GRD">Grenada</option>
            <option value="GLP">Guadeloupe</option>
            <option value="GUM">Guam</option>
            <option value="GTM">Guatemala</option>
            <option value="GGY">Guernsey</option>
            <option value="GIN">Guinea</option>
            <option value="GNB">Guinea-Bissau</option>
            <option value="GUY">Guyana</option>
            <option value="HTI">Haiti</option>
            <option value="HMD">Heard Island and McDonald Islands</option>
            <option value="VAT">Holy See (Vatican City State)</option>
            <option value="HND">Honduras</option>
            <option value="HKG">Hong Kong</option>
            <option value="HUN">Hungary</option>
            <option value="ISL">Iceland</option>
            <option value="IND">India</option>
            <option value="IDN">Indonesia</option>
            <option value="IRN">Iran, Islamic Republic of</option>
            <option value="IRQ">Iraq</option>
            <option value="IRL">Ireland</option>
            <option value="IMN">Isle of Man</option>
            <option value="ISR">Israel</option>
            <option value="ITA">Italy</option>
            <option value="JAM">Jamaica</option>
            <option value="JPN">Japan</option>
            <option value="JEY">Jersey</option>
            <option value="JOR">Jordan</option>
            <option value="KAZ">Kazakhstan</option>
            <option value="KEN">Kenya</option>
            <option value="KIR">Kiribati</option>
            <option value="PRK">Korea, Democratic People's Republic of</option>
            <option value="KOR">Korea, Republic of</option>
            <option value="KWT">Kuwait</option>
            <option value="KGZ">Kyrgyzstan</option>
            <option value="LAO">Lao People's Democratic Republic</option>
            <option value="LVA">Latvia</option>
            <option value="LBN">Lebanon</option>
            <option value="LSO">Lesotho</option>
            <option value="LBR">Liberia</option>
            <option value="LBY">Libya</option>
            <option value="LIE">Liechtenstein</option>
            <option value="LTU">Lithuania</option>
            <option value="LUX">Luxembourg</option>
            <option value="MAC">Macao</option>
            <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
            <option value="MDG">Madagascar</option>
            <option value="MWI">Malawi</option>
            <option value="MYS">Malaysia</option>
            <option value="MDV">Maldives</option>
            <option value="MLI">Mali</option>
            <option value="MLT">Malta</option>
            <option value="MHL">Marshall Islands</option>
            <option value="MTQ">Martinique</option>
            <option value="MRT">Mauritania</option>
            <option value="MUS">Mauritius</option>
            <option value="MYT">Mayotte</option>
            <option value="MEX">Mexico</option>
            <option value="FSM">Micronesia, Federated States of</option>
            <option value="MDA">Moldova, Republic of</option>
            <option value="MCO">Monaco</option>
            <option value="MNG">Mongolia</option>
            <option value="MNE">Montenegro</option>
            <option value="MSR">Montserrat</option>
            <option value="MAR">Morocco</option>
            <option value="MOZ">Mozambique</option>
            <option value="MMR">Myanmar</option>
            <option value="NAM">Namibia</option>
            <option value="NRU">Nauru</option>
            <option value="NPL">Nepal</option>
            <option value="NLD">Netherlands</option>
            <option value="NCL">New Caledonia</option>
            <option value="NZL">New Zealand</option>
            <option value="NIC">Nicaragua</option>
            <option value="NER">Niger</option>
            <option value="NGA">Nigeria</option>
            <option value="NIU">Niue</option>
            <option value="NFK">Norfolk Island</option>
            <option value="MNP">Northern Mariana Islands</option>
            <option value="NOR">Norway</option>
            <option value="OMN">Oman</option>
            <option value="PAK">Pakistan</option>
            <option value="PLW">Palau</option>
            <option value="PSE">Palestinian Territory, Occupied</option>
            <option value="PAN">Panama</option>
            <option value="PNG">Papua New Guinea</option>
            <option value="PRY">Paraguay</option>
            <option value="PER">Peru</option>
            <option value="PHL">Philippines</option>
            <option value="PCN">Pitcairn</option>
            <option value="POL">Poland</option>
            <option value="PRT">Portugal</option>
            <option value="PRI">Puerto Rico</option>
            <option value="QAT">Qatar</option>
            <option value="REU">Réunion</option>
            <option value="ROU">Romania</option>
            <option value="RUS">Russian Federation</option>
            <option value="RWA">Rwanda</option>
            <option value="BLM">Saint Barthélemy</option>
            <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
            <option value="KNA">Saint Kitts and Nevis</option>
            <option value="LCA">Saint Lucia</option>
            <option value="MAF">Saint Martin (French part)</option>
            <option value="SPM">Saint Pierre and Miquelon</option>
            <option value="VCT">Saint Vincent and the Grenadines</option>
            <option value="WSM">Samoa</option>
            <option value="SMR">San Marino</option>
            <option value="STP">Sao Tome and Principe</option>
            <option value="SAU">Saudi Arabia</option>
            <option value="SEN">Senegal</option>
            <option value="SRB">Serbia</option>
            <option value="SYC">Seychelles</option>
            <option value="SLE">Sierra Leone</option>
            <option value="SGP">Singapore</option>
            <option value="SXM">Sint Maarten (Dutch part)</option>
            <option value="SVK">Slovakia</option>
            <option value="SVN">Slovenia</option>
            <option value="SLB">Solomon Islands</option>
            <option value="SOM">Somalia</option>
            <option value="ZAF">South Africa</option>
            <option value="SGS">South Georgia and the South Sandwich Islands</option>
            <option value="SSD">South Sudan</option>
            <option value="ESP">Spain</option>
            <option value="LKA">Sri Lanka</option>
            <option value="SDN">Sudan</option>
            <option value="SUR">Suriname</option>
            <option value="SJM">Svalbard and Jan Mayen</option>
            <option value="SWZ">Swaziland</option>
            <option value="SWE">Sweden</option>
            <option value="CHE">Switzerland</option>
            <option value="SYR">Syrian Arab Republic</option>
            <option value="TWN">Taiwan, Province of China</option>
            <option value="TJK">Tajikistan</option>
            <option value="TZA">Tanzania, United Republic of</option>
            <option value="THA">Thailand</option>
            <option value="TLS">Timor-Leste</option>
            <option value="TGO">Togo</option>
            <option value="TKL">Tokelau</option>
            <option value="TON">Tonga</option>
            <option value="TTO">Trinidad and Tobago</option>
            <option value="TUN">Tunisia</option>
            <option value="TUR">Turkey</option>
            <option value="TKM">Turkmenistan</option>
            <option value="TCA">Turks and Caicos Islands</option>
            <option value="TUV">Tuvalu</option>
            <option value="UGA">Uganda</option>
            <option value="UKR">Ukraine</option>
            <option value="ARE">United Arab Emirates</option>
            <option value="GBR">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="UMI">United States Minor Outlying Islands</option>
            <option value="URY">Uruguay</option>
            <option value="UZB">Uzbekistan</option>
            <option value="VUT">Vanuatu</option>
            <option value="VEN">Venezuela, Bolivarian Republic of</option>
            <option value="VNM">Viet Nam</option>
            <option value="VGB">Virgin Islands, British</option>
            <option value="VIR">Virgin Islands, U.S.</option>
            <option value="WLF">Wallis and Futuna</option>
            <option value="ESH">Western Sahara</option>
            <option value="YEM">Yemen</option>
            <option value="ZMB">Zambia</option>
            <option value="ZWE">Zimbabwe</option>
          </select>
        </label>
        <label class="label-order">
          <span>Street Address <span class="required">*</span></span>
          <input type="text" class="order-input" name="houseadd" placeholder="House number and street name" required onChange={e => handleStateChange("billing_street_aadress", e.target.value)}/>
        </label>
        <label class="label-order">
          <span>&nbsp;</span>
          <input type="text" class="order-input" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
        </label>
        <label class="label-order">
          <span>Town / City <span class="required">*</span></span>
          <input type="text" class="order-input"  name="city" onChange={e => handleStateChange("billing_city", e.target.value)}/> 
        </label>
        <label class="label-order">
          <span>State / County <span class="required">*</span></span>
          <input type="text" class="order-input" name="city" onChange={e => handleStateChange("billing_state", e.target.value)}/> 
        </label>
        <label class="label-order">
          <span>Postcode / ZIP <span class="required">*</span></span>
          <input type="text" class="order-input" name="city" onChange={e => handleStateChange("billing_postcode", e.target.value)}/> 
        </label>
        <label class="label-order">
          <span>Phone <span class="required">*</span></span>
          <input type="tel" class="order-input" name="city" onChange={e => handleStateChange("billing_phone",  Number(e.target.value))}/> 
        </label>
        <label class="label-order">
          <span>Email Address <span class="required">*</span></span>
          <input class="order-input" type="email" name="city"/> 
        </label>
      </form>
      <div class="Yorder">
        <table class="table-order">
          <tr>
            <th colspan="2">Your order</th>
          </tr>
          <tr>
            <td>Product Name x 2(Qty)</td>
            <td>$88.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>$88.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free shipping</td>
          </tr>
        </table><br/>
        <div>
          <input type="radio" name="dbt" value="dbt" checked/> Direct Bank Transfer
        </div>
        <p>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div>
          <input type="radio" name="dbt" value="cd"/> Cash on Delivery
        </div>
        <div>
          <input type="radio" name="dbt" value="cd" /> Paypal <span>
          <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
          </span>
        </div>
        <button type="button" class="btn-order" onClick={() => apiCall()}>Place Order</button>
      </div>
    </div>
    </div>
        </>
    );
}
export default OrderConfirmPage;