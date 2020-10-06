import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Account.module.css";
import LayoutOne, { siteTitle } from "../../components/layoutOne";
import { Input, DatePicker, Menu, Dropdown, Button, Select } from "antd";
import Sidebar from "../../components/sidebar";
import Link from "next/link";

export default function Customer() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a>Pria</a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Wanita
        </a>
      </Menu.Item>
    </Menu>
  );

  const { Option } = Select;

  const handleChangeGender = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <LayoutOne>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="form-fields flex">
          <div className="w-3/12" style={{ background: "#F5F5F5" }}>
            <Sidebar />
          </div>
          <div
            className="account w-9/12 pt-10 pb-20"
            style={{ background: "#F5F5F5" }}
          >
            <div>
              <div className="inline-block w-full px-10">
                <div className="float-left block">
                  <h1 className="text-4xl">Account Detail</h1>
                </div>
                <div className="buttons float-right block">
                  <input type="button" class={styles.buttonUp} value="SAVE" />
                </div>
              </div>
              <div>
                <div className="bg-white shadow-bxShadow rounded m-10 p-20 my-0">
                  <div className="flex">
                    <div className="wrapper-account" style={{ width: "40%" }}>
                      <form>
                        <div className={styles.center}>
                          <div className="inputs text-center">
                            <label htmlFor="fileToUpload">
                              {image.preview ? (
                                <img
                                  src={image.preview}
                                  alt="dummy"
                                  width="300"
                                  height="300"
                                />
                              ) : (
                                <img
                                  src="../images/upload.png"
                                  style={{ margin: 0 }}
                                />
                              )}
                            </label>
                            <input
                              type="file"
                              name="fileToUpload"
                              id="fileToUpload"
                              style={{ display: "none" }}
                              onChange={handleChange}
                            />
                          </div>
                          <div className={styles.buttons}>
                            <input
                              type="submit"
                              value="Upload Picture"
                              name="submit"
                              className={styles.buttonUp}
                              onClick={handleUpload}
                            />
                          </div>
                          <div>
                            <p>
                              File size max 10.000.000 bytes (10Mb) Extention:
                              .JPG .JPEG .PNG
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="wrapper-account" style={{ width: "60%" }}>
                      <div className="inputs">
                        <label className="text-lg font-semibold">
                          First Name
                        </label>
                        <br />
                        <Input type="text" />
                      </div>
                      <div className="inputs">
                        <label className="text-lg font-semibold">
                          Last Name
                        </label>
                        <br />
                        <Input type="text" />
                      </div>
                      <div style={{ display: "inline-block", width: "100%" }}>
                        <div className="inputs">
                          <label className="text-lg font-semibold">
                            Phone Number
                          </label>
                          <br />
                          <div className={styles.accountInline}>
                            {/* <input type="text" className={styles.accountInline} style={{ width: "60%" }}></input> */}
                            <Input type="text" className={styles.width2} />
                            <Button className={styles.buttonChange}>
                              Change
                            </Button>
                            {/* <input type="submit" id="save-info-button" name="save-info-button" className={styles.buttonUp} style={{ float: "right" }} /> */}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "inline-block", width: "100%" }}>
                        <div className="inputs">
                          <label className="text-lg font-semibold">Email</label>
                          <br />
                          <div className={styles.accountInline}>
                            {/* <input type="text" className={styles.accountInline} style={{ width: "60%" }}></input> */}
                            <Input type="text" className={styles.width2} />
                            <Button className={styles.buttonChange}>
                              Change
                            </Button>
                            {/* <input type="submit" id="save-info-button" name="save-info-button" className={styles.buttonUp} style={{ float: "right" }} /> */}
                          </div>
                        </div>
                      </div>
                      <div className="inline-block" style={{ width: "100%" }}>
                        <div className="inputs inline-block float-left">
                          <label className="text-lg font-semibold">
                            Gender
                          </label>
                          <br />
                          <Select defaultValue="pria" style={{width:200}} onChange={handleChangeGender}>
                              <Option value="pria">Pria</Option>
                              <Option value="wanita">Wanita</Option>
                          </Select>
                        </div>
                        <div className="inputs date-of-birth inline-block float-right">
                          <label className="text-lg font-semibold">DOB</label>
                          <br />
                          {/* <input type="date"></input> */}
                          <DatePicker style={{width:200}}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="buttons py-20"
                    style={{ textAlign: "center" }}
                  >
                    <Link href="/customer/change-password">
                      <input
                        type="button"
                        class={styles.buttonUp}
                        value="Change Password"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
}
