import React from "react";
import { Button, Divider, Form, Input, Modal, Select } from "antd";

const CallCodes = (props) => {
  return (
    <div>
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }} disabled={props.isNumDisable}>
          <Select.Option value="" hidden>
            Select Country{" "}
          </Select.Option>
          <Select.Option data-countryCode="AF" value="93">
            +93
          </Select.Option>
          <Select.Option data-countryCode="AL" value="355">
            +355
          </Select.Option>
          <Select.Option data-countryCode="DZ" value="213">
            +213
          </Select.Option>
          <Select.Option data-countryCode="AS" value="1684">
            +1684
          </Select.Option>
          <Select.Option data-countryCode="AD" value="376">
            +376
          </Select.Option>
          <Select.Option data-countryCode="AO" value="244">
            +244
          </Select.Option>
          <Select.Option data-countryCode="AI" value="1264">
            +1264
          </Select.Option>
          <Select.Option data-countryCode="AQ" value="672">
            +672
          </Select.Option>
          <Select.Option data-countryCode="AG" value="1268">
            +1268
          </Select.Option>
          <Select.Option data-countryCode="AR" value="54">
            +54
          </Select.Option>
          <Select.Option data-countryCode="AM" value="374">
            +374
          </Select.Option>
          <Select.Option data-countryCode="AW" value="297">
            +297
          </Select.Option>
          <Select.Option data-countryCode="AU" value="61">
            +61
          </Select.Option>
          <Select.Option data-countryCode="AT" value="43">
            +43
          </Select.Option>
          <Select.Option data-countryCode="AZ" value="994">
            +994
          </Select.Option>
          <Select.Option data-countryCode="BS" value="1242">
            +1242
          </Select.Option>
          <Select.Option data-countryCode="BH" value="973">
            +973
          </Select.Option>
          <Select.Option data-countryCode="BD" value="880">
            +880
          </Select.Option>
          <Select.Option data-countryCode="BB" value="1246">
            +1246
          </Select.Option>
          <Select.Option data-countryCode="BY" value="375">
            +375
          </Select.Option>
          <Select.Option data-countryCode="BE" value="32">
            +32
          </Select.Option>
          <Select.Option data-countryCode="BZ" value="501">
            +501
          </Select.Option>
          <Select.Option data-countryCode="BJ" value="229">
            +229
          </Select.Option>
          <Select.Option data-countryCode="BM" value="1441">
            +1441
          </Select.Option>
          <Select.Option data-countryCode="BT" value="975">
            +975
          </Select.Option>
          <Select.Option data-countryCode="BO" value="591">
            +591
          </Select.Option>
          <Select.Option data-countryCode="BA" value="387">
            +387
          </Select.Option>
          <Select.Option data-countryCode="BW" value="267">
            +267
          </Select.Option>
          <Select.Option data-countryCode="BR" value="55">
            +55
          </Select.Option>
          <Select.Option data-countryCode="IO" value="246">
            +246
          </Select.Option>
          <Select.Option data-countryCode="VG" value="1284">
            +1284
          </Select.Option>
          <Select.Option data-countryCode="BN" value="673">
            +673
          </Select.Option>
          <Select.Option data-countryCode="BG" value="359">
            +359
          </Select.Option>
          <Select.Option data-countryCode="BF" value="226">
            +226
          </Select.Option>
          <Select.Option data-countryCode="BI" value="257">
            +257
          </Select.Option>
          <Select.Option data-countryCode="KH" value="855">
            +855
          </Select.Option>
          <Select.Option data-countryCode="CM" value="237">
            +237
          </Select.Option>
          <Select.Option data-countryCode="CA" value="1">
            +1
          </Select.Option>
          <Select.Option data-countryCode="CV" value="238">
            +238
          </Select.Option>
          <Select.Option data-countryCode="KY" value="1345">
            +1345
          </Select.Option>
          <Select.Option data-countryCode="CF" value="236">
            +236
          </Select.Option>
          <Select.Option data-countryCode="TD" value="235">
            +235
          </Select.Option>
          <Select.Option data-countryCode="CL" value="56">
            +56
          </Select.Option>
          <Select.Option data-countryCode="CN" value="86">
            +86
          </Select.Option>
          <Select.Option data-countryCode="CX" value="61">
            +61
          </Select.Option>
          <Select.Option data-countryCode="CC" value="61">
            +61
          </Select.Option>
          <Select.Option data-countryCode="CO" value="57">
            +57
          </Select.Option>
          <Select.Option data-countryCode="KM" value="269">
            +269
          </Select.Option>
          <Select.Option data-countryCode="CK" value="682">
            +682
          </Select.Option>
          <Select.Option data-countryCode="CR" value="506">
            +506
          </Select.Option>
          <Select.Option data-countryCode="HR" value="385">
            +385
          </Select.Option>
          <Select.Option data-countryCode="CU" value="53">
            +53
          </Select.Option>
          <Select.Option data-countryCode="CW" value="599">
            +599
          </Select.Option>
          <Select.Option data-countryCode="CY" value="90">
            +90
          </Select.Option>
          <Select.Option data-countryCode="CY" value="357">
            +357
          </Select.Option>
          <Select.Option data-countryCode="CZ" value="420">
            +420
          </Select.Option>
          <Select.Option data-countryCode="CD" value="243">
            +243
          </Select.Option>
          <Select.Option data-countryCode="DK" value="45">
            +45
          </Select.Option>
          <Select.Option data-countryCode="DJ" value="253">
            +253
          </Select.Option>
          <Select.Option data-countryCode="DM" value="1809">
            +1809
          </Select.Option>
          <Select.Option data-countryCode="DO" value="1809">
            +1809
          </Select.Option>
          <Select.Option data-countryCode="TL" value="670">
            +670
          </Select.Option>
          <Select.Option data-countryCode="EC" value="593">
            +593
          </Select.Option>
          <Select.Option data-countryCode="EG" value="20">
            +20
          </Select.Option>
          <Select.Option data-countryCode="SV" value="503">
            +503
          </Select.Option>
          <Select.Option data-countryCode="GQ" value="240">
            +240
          </Select.Option>
          <Select.Option data-countryCode="ER" value="291">
            +291
          </Select.Option>
          <Select.Option data-countryCode="EE" value="372">
            +372
          </Select.Option>
          <Select.Option data-countryCode="ET" value="251">
            +251
          </Select.Option>
          <Select.Option data-countryCode="FK" value="500">
            +500
          </Select.Option>
          <Select.Option data-countryCode="FO" value="298">
            +298
          </Select.Option>
          <Select.Option data-countryCode="FJ" value="679">
            +679
          </Select.Option>
          <Select.Option data-countryCode="FI" value="358">
            +358
          </Select.Option>
          <Select.Option data-countryCode="FR" value="33">
            +33
          </Select.Option>
          <Select.Option data-countryCode="GF" value="594">
            +594
          </Select.Option>
          <Select.Option data-countryCode="PF" value="689">
            +689
          </Select.Option>
          <Select.Option data-countryCode="GA" value="241">
            +241
          </Select.Option>
          <Select.Option data-countryCode="GM" value="220">
            +220
          </Select.Option>
          <Select.Option data-countryCode="GE" value="7880">
            +7880
          </Select.Option>
          <Select.Option data-countryCode="DE" value="49">
            +49
          </Select.Option>
          <Select.Option data-countryCode="GH" value="233">
            +233
          </Select.Option>
          <Select.Option data-countryCode="GI" value="350">
            +350
          </Select.Option>
          <Select.Option data-countryCode="GR" value="30">
            +30
          </Select.Option>
          <Select.Option data-countryCode="GL" value="299">
            +299
          </Select.Option>
          <Select.Option data-countryCode="GD" value="1473">
            +1473
          </Select.Option>
          <Select.Option data-countryCode="GP" value="590">
            +590
          </Select.Option>
          <Select.Option data-countryCode="GU" value="671">
            +671
          </Select.Option>
          <Select.Option data-countryCode="GT" value="502">
            +502
          </Select.Option>
          <Select.Option data-countryCode="GG" value="44">
            +44
          </Select.Option>
          <Select.Option data-countryCode="GN" value="224">
            +224
          </Select.Option>
          <Select.Option data-countryCode="GW" value="245">
            +245
          </Select.Option>
          <Select.Option data-countryCode="GY" value="592">
            +592
          </Select.Option>
          <Select.Option data-countryCode="HT" value="509">
            +509
          </Select.Option>
          <Select.Option data-countryCode="HN" value="504">
            +504
          </Select.Option>
          <Select.Option data-countryCode="HK" value="852">
            +852
          </Select.Option>
          <Select.Option data-countryCode="HU" value="36">
            +36
          </Select.Option>
          <Select.Option data-countryCode="IS" value="354">
            +354
          </Select.Option>
          <Select.Option data-countryCode="IN" value="91">
            +91
          </Select.Option>
          <Select.Option data-countryCode="ID" value="62">
            +62
          </Select.Option>
          <Select.Option data-countryCode="IR" value="98">
            +98
          </Select.Option>
          <Select.Option data-countryCode="IQ" value="964">
            +964
          </Select.Option>
          <Select.Option data-countryCode="IE" value="353">
            +353
          </Select.Option>
          <Select.Option data-countryCode="IM" value="44">
            +44
          </Select.Option>
          <Select.Option data-countryCode="IL" value="972">
            +972
          </Select.Option>
          <Select.Option data-countryCode="IT" value="39">
            +39
          </Select.Option>
          <Select.Option data-countryCode="CI" value="225">
            +225
          </Select.Option>
          <Select.Option data-countryCode="JM" value="1876">
            +1876
          </Select.Option>
          <Select.Option data-countryCode="JP" value="81">
            +81
          </Select.Option>
          <Select.Option data-countryCode="JE" value="44">
            +44
          </Select.Option>
          <Select.Option data-countryCode="JO" value="962">
            +962
          </Select.Option>
          <Select.Option data-countryCode="KZ" value="7">
            +7
          </Select.Option>
          <Select.Option data-countryCode="KE" value="254">
            +254
          </Select.Option>
          <Select.Option data-countryCode="KI" value="686">
            +686
          </Select.Option>
          <Select.Option data-countryCode="XK" value="383">
            +383
          </Select.Option>
          <Select.Option data-countryCode="KW" value="965">
            +965
          </Select.Option>
          <Select.Option data-countryCode="KG" value="996">
            +996
          </Select.Option>
          <Select.Option data-countryCode="LA" value="856">
            +856
          </Select.Option>
          <Select.Option data-countryCode="LV" value="371">
            +371
          </Select.Option>
          <Select.Option data-countryCode="LB" value="961">
            +961
          </Select.Option>
          <Select.Option data-countryCode="LS" value="266">
            +266
          </Select.Option>
          <Select.Option data-countryCode="LR" value="231">
            +231
          </Select.Option>
          <Select.Option data-countryCode="LY" value="218">
            +218
          </Select.Option>
          <Select.Option data-countryCode="LI" value="417">
            +417
          </Select.Option>
          <Select.Option data-countryCode="LT" value="370">
            +370
          </Select.Option>
          <Select.Option data-countryCode="LU" value="352">
            +352
          </Select.Option>
          <Select.Option data-countryCode="MO" value="853">
            +853
          </Select.Option>
          <Select.Option data-countryCode="MK" value="389">
            +389
          </Select.Option>
          <Select.Option data-countryCode="MG" value="261">
            +261
          </Select.Option>
          <Select.Option data-countryCode="MW" value="265">
            +265
          </Select.Option>
          <Select.Option data-countryCode="MY" value="60">
            +60
          </Select.Option>
          <Select.Option data-countryCode="MV" value="960">
            +960
          </Select.Option>
          <Select.Option data-countryCode="ML" value="223">
            +223
          </Select.Option>
          <Select.Option data-countryCode="MT" value="356">
            +356
          </Select.Option>
          <Select.Option data-countryCode="MH" value="692">
            +692
          </Select.Option>
          <Select.Option data-countryCode="MQ" value="596">
            +596
          </Select.Option>
          <Select.Option data-countryCode="MR" value="222">
            +222
          </Select.Option>
          <Select.Option data-countryCode="YT" value="269">
            +269
          </Select.Option>
          <Select.Option data-countryCode="MX" value="52">
            +52
          </Select.Option>
          <Select.Option data-countryCode="FM" value="691">
            +691
          </Select.Option>
          <Select.Option data-countryCode="MD" value="373">
            +373
          </Select.Option>
          <Select.Option data-countryCode="MC" value="377">
            +377
          </Select.Option>
          <Select.Option data-countryCode="MN" value="976">
            +976
          </Select.Option>
          <Select.Option data-countryCode="ME" value="382">
            +382
          </Select.Option>
          <Select.Option data-countryCode="MS" value="1664">
            +1664
          </Select.Option>
          <Select.Option data-countryCode="MA" value="212">
            +212
          </Select.Option>
          <Select.Option data-countryCode="MZ" value="258">
            +258
          </Select.Option>
          <Select.Option data-countryCode="MN" value="95">
            +95
          </Select.Option>
          <Select.Option data-countryCode="NA" value="264">
            +264
          </Select.Option>
          <Select.Option data-countryCode="NR" value="674">
            +674
          </Select.Option>
          <Select.Option data-countryCode="NP" value="977">
            +977
          </Select.Option>
          <Select.Option data-countryCode="NL" value="31">
            +31
          </Select.Option>
          <Select.Option data-countryCode="AN" value="599">
            +599
          </Select.Option>
          <Select.Option data-countryCode="NC" value="687">
            +687
          </Select.Option>
          <Select.Option data-countryCode="NZ" value="64">
            +64
          </Select.Option>
          <Select.Option data-countryCode="NI" value="505">
            +505
          </Select.Option>
          <Select.Option data-countryCode="NE" value="227">
            +227
          </Select.Option>
          <Select.Option data-countryCode="NG" value="234">
            +234
          </Select.Option>
          <Select.Option data-countryCode="NU" value="683">
            +683
          </Select.Option>
          <Select.Option data-countryCode="KP" value="850">
            +850
          </Select.Option>
          <Select.Option data-countryCode="NF" value="672">
            +672
          </Select.Option>
          <Select.Option data-countryCode="NP" value="670">
            +670
          </Select.Option>
          <Select.Option data-countryCode="NO" value="47">
            +47
          </Select.Option>
          <Select.Option data-countryCode="OM" value="968">
            +968
          </Select.Option>
          <Select.Option data-countryCode="PK" value="92">
            +92
          </Select.Option>
          <Select.Option data-countryCode="PW" value="680">
            +680
          </Select.Option>
          <Select.Option data-countryCode="PS" value="970">
            +970
          </Select.Option>
          <Select.Option data-countryCode="PA" value="507">
            +507
          </Select.Option>
          <Select.Option data-countryCode="PG" value="675">
            +675
          </Select.Option>
          <Select.Option data-countryCode="PY" value="595">
            +595
          </Select.Option>
          <Select.Option data-countryCode="PE" value="51">
            +51
          </Select.Option>
          <Select.Option data-countryCode="PH" value="63">
            +63
          </Select.Option>
          <Select.Option data-countryCode="PN" value="64">
            +64
          </Select.Option>
          <Select.Option data-countryCode="PL" value="48">
            +48
          </Select.Option>
          <Select.Option data-countryCode="PT" value="351">
            +351
          </Select.Option>
          <Select.Option data-countryCode="PR" value="1787">
            +1787
          </Select.Option>
          <Select.Option data-countryCode="QA" value="974">
            +974
          </Select.Option>
          <Select.Option data-countryCode="CG" value="242">
            +242
          </Select.Option>
          <Select.Option data-countryCode="RE" value="262">
            +262
          </Select.Option>
          <Select.Option data-countryCode="RO" value="40">
            +40
          </Select.Option>
          <Select.Option data-countryCode="RU" value="7">
            +7
          </Select.Option>
          <Select.Option data-countryCode="RW" value="250">
            +250
          </Select.Option>
          <Select.Option data-countryCode="BL" value="590">
            +590
          </Select.Option>
          <Select.Option data-countryCode="SH" value="290">
            +290
          </Select.Option>
          <Select.Option data-countryCode="KN" value="1869">
            +1869
          </Select.Option>
          <Select.Option data-countryCode="SC" value="1758">
            +1758
          </Select.Option>
          <Select.Option data-countryCode="SR" value="597">
            +597
          </Select.Option>
          <Select.Option data-countryCode="MF" value="590">
            +590
          </Select.Option>
          <Select.Option data-countryCode="PM" value="508">
            +508
          </Select.Option>
          <Select.Option data-countryCode="VC" value="1784">
            +1784
          </Select.Option>
          <Select.Option data-countryCode="WS" value="685">
            +685
          </Select.Option>
          <Select.Option data-countryCode="SM" value="378">
            +378
          </Select.Option>
          <Select.Option data-countryCode="ST" value="239">
            +239
          </Select.Option>
          <Select.Option data-countryCode="SA" value="966">
            +966
          </Select.Option>
          <Select.Option data-countryCode="SN" value="221">
            +221
          </Select.Option>
          <Select.Option data-countryCode="CS" value="381">
            +381
          </Select.Option>
          <Select.Option data-countryCode="SC" value="248">
            +248
          </Select.Option>
          <Select.Option data-countryCode="SL" value="232">
            +232
          </Select.Option>
          <Select.Option data-countryCode="SG" value="65">
            +65
          </Select.Option>
          <Select.Option data-countryCode="SX" value="1721">
            +1721
          </Select.Option>
          <Select.Option data-countryCode="SK" value="421">
            +421
          </Select.Option>
          <Select.Option data-countryCode="SI" value="386">
            +386
          </Select.Option>
          <Select.Option data-countryCode="SB" value="677">
            +677
          </Select.Option>
          <Select.Option data-countryCode="SO" value="252">
            +252
          </Select.Option>
          <Select.Option data-countryCode="ZA" value="27">
            +27
          </Select.Option>
          <Select.Option data-countryCode="KR" value="82">
            +82
          </Select.Option>
          <Select.Option data-countryCode="SS" value="211">
            +211
          </Select.Option>
          <Select.Option data-countryCode="ES" value="34">
            +34
          </Select.Option>
          <Select.Option data-countryCode="LK" value="94">
            +94
          </Select.Option>
          <Select.Option data-countryCode="SD" value="249">
            +249
          </Select.Option>
          <Select.Option data-countryCode="SR" value="597">
            +597
          </Select.Option>
          <Select.Option data-countryCode="SJ" value="47">
            +47
          </Select.Option>
          <Select.Option data-countryCode="SZ" value="268">
            +268
          </Select.Option>
          <Select.Option data-countryCode="SE" value="46">
            +46
          </Select.Option>
          <Select.Option data-countryCode="CH" value="41">
            +41
          </Select.Option>
          <Select.Option data-countryCode="SY" value="963">
            +963
          </Select.Option>
          <Select.Option data-countryCode="TW" value="886">
            +886
          </Select.Option>
          <Select.Option data-countryCode="TJ" value="992">
            +992
          </Select.Option>
          <Select.Option data-countryCode="TZ" value="255">
            +255
          </Select.Option>
          <Select.Option data-countryCode="TH" value="66">
            +66
          </Select.Option>
          <Select.Option data-countryCode="TG" value="228">
            +228
          </Select.Option>
          <Select.Option data-countryCode="TO" value="676">
            +676
          </Select.Option>
          <Select.Option data-countryCode="TT" value="1868">
            +1868
          </Select.Option>
          <Select.Option data-countryCode="TN" value="216">
            +216
          </Select.Option>
          <Select.Option data-countryCode="TR" value="90">
            +90
          </Select.Option>
          <Select.Option data-countryCode="TM" value="993">
            +993
          </Select.Option>
          <Select.Option data-countryCode="TC" value="1649">
            +1649
          </Select.Option>
          <Select.Option data-countryCode="TV" value="688">
            +688
          </Select.Option>
          <Select.Option data-countryCode="UG" value="256">
            +256
          </Select.Option>
          <Select.Option data-countryCode="UA" value="380">
            +380
          </Select.Option>
          <Select.Option data-countryCode="AE" value="971">
            +971
          </Select.Option>
          <Select.Option data-countryCode="GB" value="44">
            +44
          </Select.Option>
          <Select.Option data-countryCode="US" value="1">
            +1
          </Select.Option>
          <Select.Option data-countryCode="UY" value="598">
            +598
          </Select.Option>
          <Select.Option data-countryCode="UZ" value="998">
            +998
          </Select.Option>
          <Select.Option data-countryCode="VU" value="678">
            +678
          </Select.Option>
          <Select.Option data-countryCode="VA" value="379">
            +379
          </Select.Option>
          <Select.Option data-countryCode="VE" value="58">
            +58
          </Select.Option>
          <Select.Option data-countryCode="VN" value="84">
            +84
          </Select.Option>
          <Select.Option data-countryCode="WF" value="681">
            +681
          </Select.Option>
          <Select.Option data-countryCode="YE" value="969">
            +969
          </Select.Option>
          <Select.Option data-countryCode="YE" value="967">
            +967
          </Select.Option>
          <Select.Option data-countryCode="ZM" value="260">
            +260
          </Select.Option>
          <Select.Option data-countryCode="ZW" value="263">
            +263
          </Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default CallCodes;
