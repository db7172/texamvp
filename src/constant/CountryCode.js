import React from "react";
import { Button, Divider, Form, Input, Modal, Select } from "antd";

const CountryCode = (props) => {
  return (
    <div>
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }} disabled={props.isNumDisable}>
          <Select.Option value="" hidden>
            Select Country{" "}
          </Select.Option>
          <Select.Option data-countryCode="AF" value="93">
            Afghanistan (+93){" "}
          </Select.Option>
          <Select.Option data-countryCode="AL" value="355">
            Albania (+355){" "}
          </Select.Option>
          <Select.Option data-countryCode="DZ" value="213">
            Algeria (+213){" "}
          </Select.Option>
          <Select.Option data-countryCode="AS" value="1684">
            American Samoa (+1684){" "}
          </Select.Option>
          <Select.Option data-countryCode="AD" value="376">
            Andorra (+376){" "}
          </Select.Option>
          <Select.Option data-countryCode="AO" value="244">
            Angola (+244){" "}
          </Select.Option>
          <Select.Option data-countryCode="AI" value="1264">
            Anguilla (+1264){" "}
          </Select.Option>
          <Select.Option data-countryCode="AQ" value="672">
            Antartica (+672){" "}
          </Select.Option>
          <Select.Option data-countryCode="AG" value="1268">
            Antigua &amp; Barbuda (+1268){" "}
          </Select.Option>
          <Select.Option data-countryCode="AR" value="54">
            Argentina (+54){" "}
          </Select.Option>
          <Select.Option data-countryCode="AM" value="374">
            Armenia (+374){" "}
          </Select.Option>
          <Select.Option data-countryCode="AW" value="297">
            Aruba (+297){" "}
          </Select.Option>
          <Select.Option data-countryCode="AU" value="61">
            Australia (+61){" "}
          </Select.Option>
          <Select.Option data-countryCode="AT" value="43">
            Austria (+43){" "}
          </Select.Option>
          <Select.Option data-countryCode="AZ" value="994">
            Azerbaijan (+994){" "}
          </Select.Option>
          <Select.Option data-countryCode="BS" value="1242">
            Bahamas (+1242){" "}
          </Select.Option>
          <Select.Option data-countryCode="BH" value="973">
            Bahrain (+973){" "}
          </Select.Option>
          <Select.Option data-countryCode="BD" value="880">
            Bangladesh (+880){" "}
          </Select.Option>
          <Select.Option data-countryCode="BB" value="1246">
            Barbados (+1246){" "}
          </Select.Option>
          <Select.Option data-countryCode="BY" value="375">
            Belarus (+375){" "}
          </Select.Option>
          <Select.Option data-countryCode="BE" value="32">
            Belgium (+32){" "}
          </Select.Option>
          <Select.Option data-countryCode="BZ" value="501">
            Belize (+501){" "}
          </Select.Option>
          <Select.Option data-countryCode="BJ" value="229">
            Benin (+229){" "}
          </Select.Option>
          <Select.Option data-countryCode="BM" value="1441">
            Bermuda (+1441){" "}
          </Select.Option>
          <Select.Option data-countryCode="BT" value="975">
            Bhutan (+975){" "}
          </Select.Option>
          <Select.Option data-countryCode="BO" value="591">
            Bolivia (+591){" "}
          </Select.Option>
          <Select.Option data-countryCode="BA" value="387">
            Bosnia &amp; Herzegovina (+387){" "}
          </Select.Option>
          <Select.Option data-countryCode="BW" value="267">
            Botswana (+267){" "}
          </Select.Option>
          <Select.Option data-countryCode="BR" value="55">
            Brazil (+55){" "}
          </Select.Option>
          <Select.Option data-countryCode="IO" value="246">
            British India Ocean Terrirory (+246){" "}
          </Select.Option>
          <Select.Option data-countryCode="VG" value="1284">
            British Virgin Islands (+1284){" "}
          </Select.Option>
          <Select.Option data-countryCode="BN" value="673">
            Brunei (+673){" "}
          </Select.Option>
          <Select.Option data-countryCode="BG" value="359">
            Bulgaria (+359){" "}
          </Select.Option>
          <Select.Option data-countryCode="BF" value="226">
            Burkina Faso (+226){" "}
          </Select.Option>
          <Select.Option data-countryCode="BI" value="257">
            Burundi (+257){" "}
          </Select.Option>
          <Select.Option data-countryCode="KH" value="855">
            Cambodia (+855){" "}
          </Select.Option>
          <Select.Option data-countryCode="CM" value="237">
            Cameroon (+237){" "}
          </Select.Option>
          <Select.Option data-countryCode="CA" value="1">
            Canada (+1){" "}
          </Select.Option>
          <Select.Option data-countryCode="CV" value="238">
            Cape Verde Islands (+238){" "}
          </Select.Option>
          <Select.Option data-countryCode="KY" value="1345">
            Cayman Islands (+1345){" "}
          </Select.Option>
          <Select.Option data-countryCode="CF" value="236">
            Central African Republic (+236){" "}
          </Select.Option>
          <Select.Option data-countryCode="TD" value="235">
            Chad (+235){" "}
          </Select.Option>
          <Select.Option data-countryCode="CL" value="56">
            Chile (+56){" "}
          </Select.Option>
          <Select.Option data-countryCode="CN" value="86">
            China (+86){" "}
          </Select.Option>
          <Select.Option data-countryCode="CX" value="61">
            Christmas Island (+61){" "}
          </Select.Option>
          <Select.Option data-countryCode="CC" value="61">
            Cocos Islands (+61){" "}
          </Select.Option>
          <Select.Option data-countryCode="CO" value="57">
            Colombia (+57){" "}
          </Select.Option>
          <Select.Option data-countryCode="KM" value="269">
            Comoros (+269){" "}
          </Select.Option>
          <Select.Option data-countryCode="CK" value="682">
            Cook Islands (+682){" "}
          </Select.Option>
          <Select.Option data-countryCode="CR" value="506">
            Costa Rica (+506){" "}
          </Select.Option>
          <Select.Option data-countryCode="HR" value="385">
            Croatia (+385){" "}
          </Select.Option>
          <Select.Option data-countryCode="CU" value="53">
            Cuba (+53){" "}
          </Select.Option>
          <Select.Option data-countryCode="CW" value="599">
            Curacao (+599){" "}
          </Select.Option>
          <Select.Option data-countryCode="CY" value="90">
            Cyprus - North (+90){" "}
          </Select.Option>
          <Select.Option data-countryCode="CY" value="357">
            Cyprus - South (+357){" "}
          </Select.Option>
          <Select.Option data-countryCode="CZ" value="420">
            Czech Republic (+420){" "}
          </Select.Option>
          <Select.Option data-countryCode="CD" value="243">
            Democratic Republic of Congo (+243){" "}
          </Select.Option>
          <Select.Option data-countryCode="DK" value="45">
            Denmark (+45){" "}
          </Select.Option>
          <Select.Option data-countryCode="DJ" value="253">
            Djibouti (+253){" "}
          </Select.Option>
          <Select.Option data-countryCode="DM" value="1809">
            Dominica (+1809){" "}
          </Select.Option>
          <Select.Option data-countryCode="DO" value="1809">
            Dominican Republic (+1809){" "}
          </Select.Option>
          <Select.Option data-countryCode="TL" value="670">
            East Timor (+670){" "}
          </Select.Option>
          <Select.Option data-countryCode="EC" value="593">
            Ecuador (+593){" "}
          </Select.Option>
          <Select.Option data-countryCode="EG" value="20">
            Egypt (+20){" "}
          </Select.Option>
          <Select.Option data-countryCode="SV" value="503">
            El Salvador (+503){" "}
          </Select.Option>
          <Select.Option data-countryCode="GQ" value="240">
            Equatorial Guinea (+240){" "}
          </Select.Option>
          <Select.Option data-countryCode="ER" value="291">
            Eritrea (+291){" "}
          </Select.Option>
          <Select.Option data-countryCode="EE" value="372">
            Estonia (+372){" "}
          </Select.Option>
          <Select.Option data-countryCode="ET" value="251">
            Ethiopia (+251){" "}
          </Select.Option>
          <Select.Option data-countryCode="FK" value="500">
            Falkland Islands (+500){" "}
          </Select.Option>
          <Select.Option data-countryCode="FO" value="298">
            Faroe Islands (+298){" "}
          </Select.Option>
          <Select.Option data-countryCode="FJ" value="679">
            Fiji (+679){" "}
          </Select.Option>
          <Select.Option data-countryCode="FI" value="358">
            Finland (+358){" "}
          </Select.Option>
          <Select.Option data-countryCode="FR" value="33">
            France (+33){" "}
          </Select.Option>
          <Select.Option data-countryCode="GF" value="594">
            French Guiana (+594){" "}
          </Select.Option>
          <Select.Option data-countryCode="PF" value="689">
            French Polynesia (+689){" "}
          </Select.Option>
          <Select.Option data-countryCode="GA" value="241">
            Gabon (+241){" "}
          </Select.Option>
          <Select.Option data-countryCode="GM" value="220">
            Gambia (+220){" "}
          </Select.Option>
          <Select.Option data-countryCode="GE" value="7880">
            Georgia (+7880){" "}
          </Select.Option>
          <Select.Option data-countryCode="DE" value="49">
            Germany (+49){" "}
          </Select.Option>
          <Select.Option data-countryCode="GH" value="233">
            Ghana (+233){" "}
          </Select.Option>
          <Select.Option data-countryCode="GI" value="350">
            Gibraltar (+350){" "}
          </Select.Option>
          <Select.Option data-countryCode="GR" value="30">
            Greece (+30){" "}
          </Select.Option>
          <Select.Option data-countryCode="GL" value="299">
            Greenland (+299){" "}
          </Select.Option>
          <Select.Option data-countryCode="GD" value="1473">
            Grenada (+1473){" "}
          </Select.Option>
          <Select.Option data-countryCode="GP" value="590">
            Guadeloupe (+590){" "}
          </Select.Option>
          <Select.Option data-countryCode="GU" value="671">
            Guam (+671){" "}
          </Select.Option>
          <Select.Option data-countryCode="GT" value="502">
            Guatemala (+502){" "}
          </Select.Option>
          <Select.Option data-countryCode="GG" value="44">
            Guernsey (+44){" "}
          </Select.Option>
          <Select.Option data-countryCode="GN" value="224">
            Guinea (+224){" "}
          </Select.Option>
          <Select.Option data-countryCode="GW" value="245">
            Guinea-Bissau (+245){" "}
          </Select.Option>
          <Select.Option data-countryCode="GY" value="592">
            Guyana (+592){" "}
          </Select.Option>
          <Select.Option data-countryCode="HT" value="509">
            Haiti (+509){" "}
          </Select.Option>
          <Select.Option data-countryCode="HN" value="504">
            Honduras (+504){" "}
          </Select.Option>
          <Select.Option data-countryCode="HK" value="852">
            Hong Kong (+852){" "}
          </Select.Option>
          <Select.Option data-countryCode="HU" value="36">
            Hungary (+36){" "}
          </Select.Option>
          <Select.Option data-countryCode="IS" value="354">
            Iceland (+354){" "}
          </Select.Option>
          <Select.Option data-countryCode="IN" value="91">
            India (+91){" "}
          </Select.Option>
          <Select.Option data-countryCode="ID" value="62">
            Indonesia (+62){" "}
          </Select.Option>
          <Select.Option data-countryCode="IR" value="98">
            Iran (+98){" "}
          </Select.Option>
          <Select.Option data-countryCode="IQ" value="964">
            Iraq (+964){" "}
          </Select.Option>
          <Select.Option data-countryCode="IE" value="353">
            Ireland (+353){" "}
          </Select.Option>
          <Select.Option data-countryCode="IM" value="44">
            Isle of Man (+44){" "}
          </Select.Option>
          <Select.Option data-countryCode="IL" value="972">
            Israel (+972){" "}
          </Select.Option>
          <Select.Option data-countryCode="IT" value="39">
            Italy (+39){" "}
          </Select.Option>
          <Select.Option data-countryCode="CI" value="225">
            Ivory Coast (+225){" "}
          </Select.Option>
          <Select.Option data-countryCode="JM" value="1876">
            Jamaica (+1876){" "}
          </Select.Option>
          <Select.Option data-countryCode="JP" value="81">
            Japan (+81){" "}
          </Select.Option>
          <Select.Option data-countryCode="JE" value="44">
            Jersey (+44){" "}
          </Select.Option>
          <Select.Option data-countryCode="JO" value="962">
            Jordan (+962){" "}
          </Select.Option>
          <Select.Option data-countryCode="KZ" value="7">
            Kazakhstan (+7){" "}
          </Select.Option>
          <Select.Option data-countryCode="KE" value="254">
            Kenya (+254){" "}
          </Select.Option>
          <Select.Option data-countryCode="KI" value="686">
            Kiribati (+686){" "}
          </Select.Option>
          <Select.Option data-countryCode="XK" value="383">
            Kosovo (+383){" "}
          </Select.Option>
          <Select.Option data-countryCode="KW" value="965">
            Kuwait (+965){" "}
          </Select.Option>
          <Select.Option data-countryCode="KG" value="996">
            Kyrgyzstan (+996){" "}
          </Select.Option>
          <Select.Option data-countryCode="LA" value="856">
            Laos (+856){" "}
          </Select.Option>
          <Select.Option data-countryCode="LV" value="371">
            Latvia (+371){" "}
          </Select.Option>
          <Select.Option data-countryCode="LB" value="961">
            Lebanon (+961){" "}
          </Select.Option>
          <Select.Option data-countryCode="LS" value="266">
            Lesotho (+266){" "}
          </Select.Option>
          <Select.Option data-countryCode="LR" value="231">
            Liberia (+231){" "}
          </Select.Option>
          <Select.Option data-countryCode="LY" value="218">
            Libya (+218){" "}
          </Select.Option>
          <Select.Option data-countryCode="LI" value="417">
            Liechtenstein (+417){" "}
          </Select.Option>
          <Select.Option data-countryCode="LT" value="370">
            Lithuania (+370){" "}
          </Select.Option>
          <Select.Option data-countryCode="LU" value="352">
            Luxembourg (+352){" "}
          </Select.Option>
          <Select.Option data-countryCode="MO" value="853">
            Macao (+853){" "}
          </Select.Option>
          <Select.Option data-countryCode="MK" value="389">
            Macedonia (+389){" "}
          </Select.Option>
          <Select.Option data-countryCode="MG" value="261">
            Madagascar (+261){" "}
          </Select.Option>
          <Select.Option data-countryCode="MW" value="265">
            Malawi (+265){" "}
          </Select.Option>
          <Select.Option data-countryCode="MY" value="60">
            Malaysia (+60){" "}
          </Select.Option>
          <Select.Option data-countryCode="MV" value="960">
            Maldives (+960){" "}
          </Select.Option>
          <Select.Option data-countryCode="ML" value="223">
            Mali (+223){" "}
          </Select.Option>
          <Select.Option data-countryCode="MT" value="356">
            Malta (+356){" "}
          </Select.Option>
          <Select.Option data-countryCode="MH" value="692">
            Marshall Islands (+692){" "}
          </Select.Option>
          <Select.Option data-countryCode="MQ" value="596">
            Martinique (+596){" "}
          </Select.Option>
          <Select.Option data-countryCode="MR" value="222">
            Mauritania (+222){" "}
          </Select.Option>
          <Select.Option data-countryCode="YT" value="269">
            Mayotte (+269){" "}
          </Select.Option>
          <Select.Option data-countryCode="MX" value="52">
            Mexico (+52){" "}
          </Select.Option>
          <Select.Option data-countryCode="FM" value="691">
            Micronesia (+691){" "}
          </Select.Option>
          <Select.Option data-countryCode="MD" value="373">
            Moldova (+373){" "}
          </Select.Option>
          <Select.Option data-countryCode="MC" value="377">
            Monaco (+377){" "}
          </Select.Option>
          <Select.Option data-countryCode="MN" value="976">
            Mongolia (+976){" "}
          </Select.Option>
          <Select.Option data-countryCode="ME" value="382">
            Montengro (+382){" "}
          </Select.Option>
          <Select.Option data-countryCode="MS" value="1664">
            Montserrat (+1664){" "}
          </Select.Option>
          <Select.Option data-countryCode="MA" value="212">
            Morocco (+212){" "}
          </Select.Option>
          <Select.Option data-countryCode="MZ" value="258">
            Mozambique (+258){" "}
          </Select.Option>
          <Select.Option data-countryCode="MN" value="95">
            Myanmar (+95){" "}
          </Select.Option>
          <Select.Option data-countryCode="NA" value="264">
            Namibia (+264){" "}
          </Select.Option>
          <Select.Option data-countryCode="NR" value="674">
            Nauru (+674){" "}
          </Select.Option>
          <Select.Option data-countryCode="NP" value="977">
            Nepal (+977){" "}
          </Select.Option>
          <Select.Option data-countryCode="NL" value="31">
            Netherlands (+31){" "}
          </Select.Option>
          <Select.Option data-countryCode="AN" value="599">
            Netherlands Antilles (+599){" "}
          </Select.Option>
          <Select.Option data-countryCode="NC" value="687">
            New Caledonia (+687){" "}
          </Select.Option>
          <Select.Option data-countryCode="NZ" value="64">
            New Zealand (+64){" "}
          </Select.Option>
          <Select.Option data-countryCode="NI" value="505">
            Nicaragua (+505){" "}
          </Select.Option>
          <Select.Option data-countryCode="NE" value="227">
            Niger (+227){" "}
          </Select.Option>
          <Select.Option data-countryCode="NG" value="234">
            Nigeria (+234){" "}
          </Select.Option>
          <Select.Option data-countryCode="NU" value="683">
            Niue (+683){" "}
          </Select.Option>
          <Select.Option data-countryCode="KP" value="850">
            North Korea (+850){" "}
          </Select.Option>
          <Select.Option data-countryCode="NF" value="672">
            Norfolk Islands (+672){" "}
          </Select.Option>
          <Select.Option data-countryCode="NP" value="670">
            Northern Marianas (+670){" "}
          </Select.Option>
          <Select.Option data-countryCode="NO" value="47">
            Norway (+47){" "}
          </Select.Option>
          <Select.Option data-countryCode="OM" value="968">
            Oman (+968){" "}
          </Select.Option>
          <Select.Option data-countryCode="PK" value="92">
            Pakistan (+92){" "}
          </Select.Option>
          <Select.Option data-countryCode="PW" value="680">
            Palau (+680){" "}
          </Select.Option>
          <Select.Option data-countryCode="PS" value="970">
            Palestine (+970){" "}
          </Select.Option>
          <Select.Option data-countryCode="PA" value="507">
            Panama (+507){" "}
          </Select.Option>
          <Select.Option data-countryCode="PG" value="675">
            Papua New Guinea (+675){" "}
          </Select.Option>
          <Select.Option data-countryCode="PY" value="595">
            Paraguay (+595){" "}
          </Select.Option>
          <Select.Option data-countryCode="PE" value="51">
            Peru (+51){" "}
          </Select.Option>
          <Select.Option data-countryCode="PH" value="63">
            Philippines (+63){" "}
          </Select.Option>
          <Select.Option data-countryCode="PN" value="64">
            Pitcairn (+64){" "}
          </Select.Option>
          <Select.Option data-countryCode="PL" value="48">
            Poland (+48){" "}
          </Select.Option>
          <Select.Option data-countryCode="PT" value="351">
            Portugal (+351){" "}
          </Select.Option>
          <Select.Option data-countryCode="PR" value="1787">
            Puerto Rico (+1787){" "}
          </Select.Option>
          <Select.Option data-countryCode="QA" value="974">
            Qatar (+974){" "}
          </Select.Option>
          <Select.Option data-countryCode="CG" value="242">
            Republic of the Congo (+242){" "}
          </Select.Option>
          <Select.Option data-countryCode="RE" value="262">
            Reunion (+262){" "}
          </Select.Option>
          <Select.Option data-countryCode="RO" value="40">
            Romania (+40){" "}
          </Select.Option>
          <Select.Option data-countryCode="RU" value="7">
            Russia (+7){" "}
          </Select.Option>
          <Select.Option data-countryCode="RW" value="250">
            Rwanda (+250){" "}
          </Select.Option>
          <Select.Option data-countryCode="BL" value="590">
            Saint Barthelemy (+590){" "}
          </Select.Option>
          <Select.Option data-countryCode="SH" value="290">
            Saint Helena (+290){" "}
          </Select.Option>
          <Select.Option data-countryCode="KN" value="1869">
            Saint Kitts &amp; Nevis (+1869){" "}
          </Select.Option>
          <Select.Option data-countryCode="SC" value="1758">
            Saint Lucia (+1758){" "}
          </Select.Option>
          <Select.Option data-countryCode="SR" value="597">
            Suriname (+597){" "}
          </Select.Option>
          <Select.Option data-countryCode="MF" value="590">
            Saint Martin (+590){" "}
          </Select.Option>
          <Select.Option data-countryCode="PM" value="508">
            Saint Saint Pierre and Miquelon (+508){" "}
          </Select.Option>
          <Select.Option data-countryCode="VC" value="1784">
            Saint Vincent and the Grenadines (+1784){" "}
          </Select.Option>
          <Select.Option data-countryCode="WS" value="685">
            Samoa (+685){" "}
          </Select.Option>
          <Select.Option data-countryCode="SM" value="378">
            San Marino (+378){" "}
          </Select.Option>
          <Select.Option data-countryCode="ST" value="239">
            Sao Tome &amp; Principe (+239){" "}
          </Select.Option>
          <Select.Option data-countryCode="SA" value="966">
            Saudi Arabia (+966){" "}
          </Select.Option>
          <Select.Option data-countryCode="SN" value="221">
            Senegal (+221){" "}
          </Select.Option>
          <Select.Option data-countryCode="CS" value="381">
            Serbia (+381){" "}
          </Select.Option>
          <Select.Option data-countryCode="SC" value="248">
            Seychelles (+248){" "}
          </Select.Option>
          <Select.Option data-countryCode="SL" value="232">
            Sierra Leone (+232){" "}
          </Select.Option>
          <Select.Option data-countryCode="SG" value="65">
            Singapore (+65){" "}
          </Select.Option>
          <Select.Option data-countryCode="SX" value="1721">
            Sint Maarten (+1721){" "}
          </Select.Option>
          <Select.Option data-countryCode="SK" value="421">
            Slovakia (+421){" "}
          </Select.Option>
          <Select.Option data-countryCode="SI" value="386">
            Slovenia (+386){" "}
          </Select.Option>
          <Select.Option data-countryCode="SB" value="677">
            Solomon Islands (+677){" "}
          </Select.Option>
          <Select.Option data-countryCode="SO" value="252">
            Somalia (+252){" "}
          </Select.Option>
          <Select.Option data-countryCode="ZA" value="27">
            South Africa (+27){" "}
          </Select.Option>
          <Select.Option data-countryCode="KR" value="82">
            South Korea (+82){" "}
          </Select.Option>
          <Select.Option data-countryCode="SS" value="211">
            South Sudan (+211){" "}
          </Select.Option>
          <Select.Option data-countryCode="ES" value="34">
            Spain (+34){" "}
          </Select.Option>
          <Select.Option data-countryCode="LK" value="94">
            Sri Lanka (+94){" "}
          </Select.Option>
          <Select.Option data-countryCode="SD" value="249">
            Sudan (+249){" "}
          </Select.Option>
          <Select.Option data-countryCode="SR" value="597">
            Suriname (+597){" "}
          </Select.Option>
          <Select.Option data-countryCode="SJ" value="47">
            Svalbard &amp; Jan Mayen (+47){" "}
          </Select.Option>
          <Select.Option data-countryCode="SZ" value="268">
            Swaziland (+268){" "}
          </Select.Option>
          <Select.Option data-countryCode="SE" value="46">
            Sweden (+46){" "}
          </Select.Option>
          <Select.Option data-countryCode="CH" value="41">
            Switzerland (+41){" "}
          </Select.Option>
          <Select.Option data-countryCode="SY" value="963">
            Syria (+963){" "}
          </Select.Option>
          <Select.Option data-countryCode="TW" value="886">
            Taiwan (+886){" "}
          </Select.Option>
          <Select.Option data-countryCode="TJ" value="992">
            Tajikistan (+992){" "}
          </Select.Option>
          <Select.Option data-countryCode="TZ" value="255">
            Tanzania (+255){" "}
          </Select.Option>
          <Select.Option data-countryCode="TH" value="66">
            Thailand (+66){" "}
          </Select.Option>
          <Select.Option data-countryCode="TG" value="228">
            Togo (+228){" "}
          </Select.Option>
          <Select.Option data-countryCode="TO" value="676">
            Tonga (+676){" "}
          </Select.Option>
          <Select.Option data-countryCode="TT" value="1868">
            Trinidad &amp; Tobago (+1868){" "}
          </Select.Option>
          <Select.Option data-countryCode="TN" value="216">
            Tunisia (+216){" "}
          </Select.Option>
          <Select.Option data-countryCode="TR" value="90">
            Turkey (+90){" "}
          </Select.Option>
          <Select.Option data-countryCode="TM" value="993">
            Turkmenistan (+993){" "}
          </Select.Option>
          <Select.Option data-countryCode="TC" value="1649">
            Turks &amp; Caicos Islands (+1649){" "}
          </Select.Option>
          <Select.Option data-countryCode="TV" value="688">
            Tuvalu (+688){" "}
          </Select.Option>
          <Select.Option data-countryCode="UG" value="256">
            Uganda (+256){" "}
          </Select.Option>
          <Select.Option data-countryCode="UA" value="380">
            Ukraine (+380){" "}
          </Select.Option>
          <Select.Option data-countryCode="AE" value="971">
            United Arab Emirates (+971){" "}
          </Select.Option>
          <Select.Option data-countryCode="GB" value="44">
            United Kingdom (+44){" "}
          </Select.Option>
          <Select.Option data-countryCode="US" value="1">
            United States (+1){" "}
          </Select.Option>
          <Select.Option data-countryCode="UY" value="598">
            Uruguay (+598){" "}
          </Select.Option>
          <Select.Option data-countryCode="UZ" value="998">
            Uzbekistan (+998){" "}
          </Select.Option>
          <Select.Option data-countryCode="VU" value="678">
            Vanuatu (+678){" "}
          </Select.Option>
          <Select.Option data-countryCode="VA" value="379">
            Vatican City (+379){" "}
          </Select.Option>
          <Select.Option data-countryCode="VE" value="58">
            Venezuela (+58){" "}
          </Select.Option>
          <Select.Option data-countryCode="VN" value="84">
            Vietnam (+84){" "}
          </Select.Option>
          <Select.Option data-countryCode="WF" value="681">
            Wallis &amp; Futuna (+681){" "}
          </Select.Option>
          <Select.Option data-countryCode="YE" value="969">
            Yemen (North)(+969){" "}
          </Select.Option>
          <Select.Option data-countryCode="YE" value="967">
            Yemen (South)(+967){" "}
          </Select.Option>
          <Select.Option data-countryCode="ZM" value="260">
            Zambia (+260){" "}
          </Select.Option>
          <Select.Option data-countryCode="ZW" value="263">
            Zimbabwe (+263){" "}
          </Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default CountryCode;
