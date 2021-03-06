import React from "react";
import "./setup.css";

function Setup() {
  return (
    <main className="main-wrpr body-content">
      <div className="bg-white px-5 px-md-10 container">
        <div className="row d-flex justify-content-center mx-md-4">
          <div className="col-16 col-md-8 p-1">
            <div className="row">
              <div className="col-16">
                <div>
                  <div className="row">
                    <div className="col">
                      <div className="page-hdr__wrpr mt-md-4">
                        {/**/}
                        <h1 className="page-hdr__wrpr__ttl">
                          Setup your account
                        </h1>
                        <p className="page-hdr__wrpr__ttl--sub">
                          Just a few more details and you can get started.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-16">
                      <div className="sgnup">
                        <form autoComplete="off" method="post">
                          <div role="group" className="mb-4">
                            <label htmlFor="fname" className="inpt__lbl">
                              Full Name
                            </label>
                            <input
                              id="fname"
                              data-vv-as="Full Name"
                              autoComplete="new-password"
                              name="fname"
                              type="text"
                              className="inpt__box inpt__box--lg width--block input pristine untouched"
                            />
                            <span
                              className="help text--err text--sm"
                              style={{ display: "none" }}
                            />
                          </div>
                          <div role="group" className="mb-4">
                            <label htmlFor="phone" className="inpt__lbl">
                              Mobile Number
                            </label>
                            <div
                              role="group"
                              className="mb-1 grp__phn phnNmbr-div"
                            >
                              <select
                                id="countryCode"
                                name="countryCode"
                                className="slct slct--xxl slct--cstm slct--inline slct--phnNmbr pristine untouched"
                              >
                                <option selected="selected" value={+971}>
                                  +971
                                </option>
                                <option value={+966}>+966</option>
                                <option value={+968}>+968</option>
                                <option value={+973}>+973</option>
                                <option value={+974}>+974</option>
                                <option value={+965}>+965</option>
                                <option value={+20}>+20</option>
                                <option value={+962}>+962</option>
                              </select>
                              <input
                                data-vv-as="v.phone"
                                placeholder="50 123 4567"
                                autoComplete="new-password"
                                name="phone"
                                type="number"
                                min={0}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                className="inpt__box inpt__box--phn inpt__box--lg inpt__box__tick--dsbld input phnNmbr-div__input pristine untouched"
                              />
                            </div>
                            {/**/}
                          </div>
                          <div role="group" className="mb-4">
                            <div className="column is-12">
                              <label htmlFor="email" className="inpt__lbl">
                                Email
                              </label>
                              <input
                                id="email"
                                //   disabled="disabled"
                                data-vv-as="email"
                                name="email"
                                autoComplete="email"
                                type="text"
                                className="inpt__box inpt__box--lg width--block inpt__box__tick--dsbld input"
                              />
                            </div>
                            {/**/} {/**/}
                          </div>
                          <div role="group" className="mb-4 inpt__pswrd">
                            <label htmlFor="password" className="inpt__lbl">
                              Password
                            </label>
                            <input
                              id="password"
                              data-vv-as="v.password"
                              autoComplete="new-password"
                              name="password"
                              type="password"
                              className="inpt__box inpt__box--lg width--block input pristine untouched"
                            />
                            {/**/}
                            <span
                              className="help text--err text--sm"
                              style={{ display: "none" }}
                            >
                              The password should be at least 6 characters long.
                            </span>
                          </div>
                          <div role="group" className="mb-4">
                            <label htmlFor="dob" className="inpt__lbl">
                              Date of Birth
                            </label>
                            <div className="slct--grp">
                              <select
                                id="dob"
                                name="date"
                                className="slct slct--xxl slct--cstm slct--inline"
                              >
                                <option value>DD</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                                <option value={21}>21</option>
                                <option value={22}>22</option>
                                <option value={23}>23</option>
                                <option value={24}>24</option>
                                <option value={25}>25</option>
                                <option value={26}>26</option>
                                <option value={27}>27</option>
                                <option value={28}>28</option>
                                <option value={29}>29</option>
                                <option value={30}>30</option>
                                <option value={31}>31</option>
                              </select>
                              <select
                                name="month"
                                className="slct slct--xxl slct--cstm slct--inline"
                              >
                                <option value>MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                              </select>
                              <select
                                name="year"
                                className="slct slct--xxl slct--cstm slct--inline slct--year"
                              >
                                <option value>YYYY</option>
                                <option value={2020}>2020</option>
                                <option value={2019}>2019</option>
                                <option value={2018}>2018</option>
                                <option value={2017}>2017</option>
                                <option value={2016}>2016</option>
                                <option value={2015}>2015</option>
                                <option value={2014}>2014</option>
                                <option value={2013}>2013</option>
                                <option value={2012}>2012</option>
                                <option value={2011}>2011</option>
                                <option value={2010}>2010</option>
                                <option value={2009}>2009</option>
                                <option value={2008}>2008</option>
                                <option value={2007}>2007</option>
                                <option value={2006}>2006</option>
                                <option value={2005}>2005</option>
                                <option value={2004}>2004</option>
                                <option value={2003}>2003</option>
                                <option value={2002}>2002</option>
                                <option value={2001}>2001</option>
                                <option value={2000}>2000</option>
                                <option value={1999}>1999</option>
                                <option value={1998}>1998</option>
                                <option value={1997}>1997</option>
                                <option value={1996}>1996</option>
                                <option value={1995}>1995</option>
                                <option value={1994}>1994</option>
                                <option value={1993}>1993</option>
                                <option value={1992}>1992</option>
                                <option value={1991}>1991</option>
                                <option value={1990}>1990</option>
                                <option value={1989}>1989</option>
                                <option value={1988}>1988</option>
                                <option value={1987}>1987</option>
                                <option value={1986}>1986</option>
                                <option value={1985}>1985</option>
                                <option value={1984}>1984</option>
                                <option value={1983}>1983</option>
                                <option value={1982}>1982</option>
                                <option value={1981}>1981</option>
                                <option value={1980}>1980</option>
                                <option value={1979}>1979</option>
                                <option value={1978}>1978</option>
                                <option value={1977}>1977</option>
                                <option value={1976}>1976</option>
                                <option value={1975}>1975</option>
                                <option value={1974}>1974</option>
                                <option value={1973}>1973</option>
                                <option value={1972}>1972</option>
                                <option value={1971}>1971</option>
                                <option value={1970}>1970</option>
                                <option value={1969}>1969</option>
                                <option value={1968}>1968</option>
                                <option value={1967}>1967</option>
                                <option value={1966}>1966</option>
                                <option value={1965}>1965</option>
                                <option value={1964}>1964</option>
                                <option value={1963}>1963</option>
                                <option value={1962}>1962</option>
                                <option value={1961}>1961</option>
                                <option value={1960}>1960</option>
                                <option value={1959}>1959</option>
                                <option value={1958}>1958</option>
                                <option value={1957}>1957</option>
                                <option value={1956}>1956</option>
                                <option value={1955}>1955</option>
                                <option value={1954}>1954</option>
                                <option value={1953}>1953</option>
                                <option value={1952}>1952</option>
                                <option value={1951}>1951</option>
                                <option value={1950}>1950</option>
                                <option value={1949}>1949</option>
                                <option value={1948}>1948</option>
                                <option value={1947}>1947</option>
                                <option value={1946}>1946</option>
                                <option value={1945}>1945</option>
                                <option value={1944}>1944</option>
                                <option value={1943}>1943</option>
                                <option value={1942}>1942</option>
                                <option value={1941}>1941</option>
                                <option value={1940}>1940</option>
                                <option value={1939}>1939</option>
                                <option value={1938}>1938</option>
                                <option value={1937}>1937</option>
                                <option value={1936}>1936</option>
                                <option value={1935}>1935</option>
                                <option value={1934}>1934</option>
                                <option value={1933}>1933</option>
                                <option value={1932}>1932</option>
                                <option value={1931}>1931</option>
                                <option value={1930}>1930</option>
                                <option value={1929}>1929</option>
                                <option value={1928}>1928</option>
                                <option value={1927}>1927</option>
                                <option value={1926}>1926</option>
                                <option value={1925}>1925</option>
                                <option value={1924}>1924</option>
                                <option value={1923}>1923</option>
                                <option value={1922}>1922</option>
                                <option value={1921}>1921</option>
                                <option value={1920}>1920</option>
                                <option value={1919}>1919</option>
                                <option value={1918}>1918</option>
                                <option value={1917}>1917</option>
                                <option value={1916}>1916</option>
                                <option value={1915}>1915</option>
                                <option value={1914}>1914</option>
                                <option value={1913}>1913</option>
                                <option value={1912}>1912</option>
                                <option value={1911}>1911</option>
                                <option value={1910}>1910</option>
                                <option value={1909}>1909</option>
                                <option value={1908}>1908</option>
                                <option value={1907}>1907</option>
                                <option value={1906}>1906</option>
                                <option value={1905}>1905</option>
                                <option value={1904}>1904</option>
                                <option value={1903}>1903</option>
                                <option value={1902}>1902</option>
                                <option value={1901}>1901</option>
                                <option value={1900}>1900</option>
                              </select>
                            </div>
                            {/**/}
                            <span
                              className="help text--err text--sm"
                              style={{ display: "none" }}
                            >
                              Enter a valid Date of Birth
                            </span>
                          </div>
                          <div className="mb-3">
                            <div className="form__trms-cndtn">
                              <div className="custom-control custom-checkbox custom-control-inline">
                                <input
                                  id="checkbox-1"
                                  type="checkbox"
                                  name="checkbox-1"
                                  autoComplete="off"
                                  true-value="accepted"
                                  false-value="not_accepted"
                                  className="custom-control-input"
                                  defaultValue="accepted"
                                />
                                <label
                                  htmlFor="checkbox-1"
                                  className="custom-control-label"
                                >
                                  By signing up, you are agreeing that you are
                                  18+ and accept Shukran’s
                                  <a
                                    href="/ae/en/terms-of-use"
                                    className="lnk lnk--ylw lnk--undrln text--sm"
                                    target="_blank"
                                  >
                                    Terms of Use
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="group mt-md-4 mt-6">
                            <div
                              value="submit"
                              className="bttn bttn--block bttn--ylw bttn--xl bttn--rspnsv"
                            >
                              Setup now
                            </div>
                            {/**/}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 mb-15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Setup;
