(function($) {

    $.oversea_tp = $.tp = {

        windows : {},
        forms : {},
        listGrids : {},
        labels : {},
        buttons : {},
        reports_name : {}

    };
    $.tp.show = function() {
    };

    $.tp.set_line_no = function(grid) {

        for(i=1;i<=grid.data.length;i++)
        {
            grid.setEditValue(i-1, "LINE_NO", i);
        }
        grid.saveAllEdits();
    };

    $.tp.createDataSource = function() {

    };
    $.tp.reports_name["report_name"] = 'tp';
    var from_amount = false;
    var listgrid_result;
    var TP_URL = "tp.jsp";
    //var TP_URL = "../data/tp_temp_data.txt";
    var TP_SAVING_URL = "tp.jsp?method=saving";
    //var TP_SAVING_URL = "../data/tp_temp_data.txt";
    //var grid_date=[{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-26","LOADING_PORT":"Shanghai,China","DELIVERY_PORT":"ALTAMIRA, MEXICO","CONTRACT_NUM":"SC2B507","BILL_OF_LADING":"SKSMSAAM00044000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206321-01.01","FRE_ITEM_DESC":"SC2B507-01-01-1211-Port-Shanghai~ALTAMIRA, MEXICO,CR.70*.5*1200*0*COLD ROLL-6.000~10.000MT-","ITEM_DESC":"CR.70*.5*1200*0*COLD ROLLED NON-ORIENTED ELECTRICAL STEEL IN COIL","BAOSTEEL_NUM":"SC2B507001","SHIPMENT_HEADER_ID":28722,"SHIPMENT_LINE_ID":66909,"ORDERED_QTY":279.402,"SHIP_QTY":"282.442","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-26","LOADING_PORT":"Shanghai,China","DELIVERY_PORT":"ALTAMIRA, MEXICO","CONTRACT_NUM":"SC2B507","BILL_OF_LADING":"SKSMSAAM00044000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206321-03.01","FRE_ITEM_DESC":"SC2B507-03-01-1211-Port-Shanghai~ALTAMIRA, MEXICO,CR.70*.35*1000*0*COLD ROL-6.000~10.000MT-","ITEM_DESC":"CR.70*.35*1000*0*COLD ROLLED NON-ORIENTED ELECTRICAL STEEL IN COIL","BAOSTEEL_NUM":"SC2B507003","SHIPMENT_HEADER_ID":28722,"SHIPMENT_LINE_ID":66911,"ORDERED_QTY":180.553,"SHIP_QTY":"182.233","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-25","LOADING_PORT":"Shanghai,China","DELIVERY_PORT":"ALTAMIRA,MEXICO","CONTRACT_NUM":"JC2B401","BILL_OF_LADING":"SKSMSAAM00042000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206102-01.01","FRE_ITEM_DESC":"JC2B401-01-01-1212-Port-Shanghai~ALTAMIRA,MEXICO,WP.10*.5*96*288~288*Hot R-MT-","ITEM_DESC":"WP.10*.5*96*288~288*Hot Rolled Steel Plate","BAOSTEEL_NUM":"JC2B401001","SHIPMENT_HEADER_ID":28724,"SHIPMENT_LINE_ID":66934,"ORDERED_QTY":49.784,"SHIP_QTY":"49.784","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-25","LOADING_PORT":"Shanghai,China","DELIVERY_PORT":"ALTAMIRA,MEXICO","CONTRACT_NUM":"JC2B401","BILL_OF_LADING":"SKSMSAAM00042000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206102-03.01","FRE_ITEM_DESC":"JC2B401-01-03-1210-Port-Shanghai~ALTAMIRA,MEXICO,WP.10*.75*96*288~288*Hot -MT-","ITEM_DESC":"WP.10*.75*96*288~288*Hot Rolled Steel Plate","BAOSTEEL_NUM":"JC2B401003","SHIPMENT_HEADER_ID":28724,"SHIPMENT_LINE_ID":66936,"ORDERED_QTY":48.006,"SHIP_QTY":"48.006","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-25","LOADING_PORT":"Shanghai,China","DELIVERY_PORT":"ALTAMIRA,MEXICO","CONTRACT_NUM":"JC2B401","BILL_OF_LADING":"SKSMSAAM00042000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206102-04.01","FRE_ITEM_DESC":"JC2B401-01-04-1210-Port-Shanghai~ALTAMIRA,MEXICO,WP.10*1*96*288~288*Hot Ro-MT-","ITEM_DESC":"WP.10*1*96*288~288*Hot Rolled Steel Plate","BAOSTEEL_NUM":"JC2B401004","SHIPMENT_HEADER_ID":28724,"SHIPMENT_LINE_ID":66937,"ORDERED_QTY":49.784,"SHIP_QTY":"49.784","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-26","LOADING_PORT":"BAOSTEEL PRODUCTS WHARF SHANGHAI,China","DELIVERY_PORT":"ALTAMIRA, MEXICO","CONTRACT_NUM":"SC2B496","BILL_OF_LADING":"SKSMSAAM00042000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206301-01.01","FRE_ITEM_DESC":"SC2B496-01-01-1212-Port-Baosteel~ALTAMIRA, MEXICO,CR.70*.35*1000*0*COLD ROL-5.000~8.000MT-","ITEM_DESC":"CR.70*.35*1000*0*COLD ROLLED NON-ORIENTED ELECTRICAL STEEL SHEET IN COIL","BAOSTEEL_NUM":"SC2B496001","SHIPMENT_HEADER_ID":28726,"SHIPMENT_LINE_ID":66950,"ORDERED_QTY":713.756,"SHIP_QTY":"723.276","UOM":"MT"},{"BOAT_NAME":"GANG QIANG V.211E","DEPARTURE_DATE":"2012-11-26","LOADING_PORT":"BAOSTEEL PRODUCTS WHARF SHANGHAI,China","DELIVERY_PORT":"ALTAMIRA, MEXICO","CONTRACT_NUM":"SC2B498","BILL_OF_LADING":"SKSMSAAM00048000","VOYAGE_NUM":"V.211E","FRE_ITEM_NUM":"FR-206303-01.01","FRE_ITEM_DESC":"SC2B498-01-01-1212-Port-Baosteel~ALTAMIRA, MEXICO,CR.70*.5*1000*0*COLD ROLL-2.000~5.000MT-","ITEM_DESC":"CR.70*.5*1000*0*COLD ROLLED NON-ORIENTED ELECTRICAL STEEL IN COIL","BAOSTEEL_NUM":"SC2B498001","SHIPMENT_HEADER_ID":28720,"SHIPMENT_LINE_ID":66907,"ORDERED_QTY":135.484,"SHIP_QTY":"137.954","UOM":"MT"}];
    /**
     * Created with JetBrains WebStorm. User: realakuma Date: 12-10-24 Time:
     * 上午10:02 To change this template use File | Settings | File Templates.
     */
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //datasouce defination
    var ds_tp = isc.DataSource.create({
        dataFormat : "json", // 数据格式 json格式
        fields : [ {
            name : "BOAT_NAME",
            type : "text",
            canSave : true
        },
            {
                name : "INVOICE_NUM",
                type : "text",
                canSave : true
            },
            {
                name : "DEPARTURE_DATE",
                type : "text",
                canSave : true
            }, {
                name : "LOADING_PORT",
                type : "text",
                canSave : true
            }, {
                name : "DELIVERY_PORT",
                type : "text",
                canSave : true
            }, {
                name : "CONTRACT_NUM",
                type : "text",
                canSave : true
            }, {
                name : "BILL_OF_LADING",
                type : "text",
                canSave : true
            }, {
                name : "VOYAGE_NUM",
                type : "text",
                canSave : true
            }, {
                name : "FRE_ITEM_NUM",
                type : "text",
                canSave : true
            }, {
                name : "FRE_ITEM_DESC",
                type : "text",
                canSave : true
            }, {
                name : "ITEM_DESC",
                type : "text",
                canSave : true
            }, {
                name : "BAOSTEEL_NUM",
                type : "text",
                canSave : true
            }, {
                name : "SHIPMENT_HEADER_ID",
                type : "float",
                canSave : true
            }, {
                name : "SHIPMENT_LINE_ID",
                type : "float",
                canSave : true
            }, {
                name : "ORDERED_QTY",
                type : "float",
                canSave : true
            }, {
                name : "SHIP_QTY",
                type : "float",
                canSave : true
            }, {
                name : "UOM",
                type : "text",
                canSave : true
            }, {
                name : "UNIT_PRICE",
                type : "float",
                canSave : true
            }, {
                name : "AMOUNT",
                type : "float",
                canSave : true
            }

        ],

        operationBindings : [ {
            operationType : "fetch",
            dataURL : TP_URL,
            requestProperties : {
                httpMethod : "POST"
            }
        }/*, {
         operationType : "add"
         // dataURL:"country/insertInfo.action"
         }, {
         operationType : "update",
         dataURL : TP_URL,
         requestProperties : {
         httpMethod : "POST"
         }
         }, {
         operationType : "remove"
         // dataURL:"country/deleteInfo.action"
         } */],
        transformRequest : function(dsRequest) {
            return isc.addProperties(dsRequest.oldValues, dsRequest.data);
        }

    });

    var ds_vendor = isc.DataSource.create({
        dataFormat : "json", // 数据格式 json格式
        fields : [ {
            name : "VENDOR_SITE_ID",
            type : "text",
            canSave : false
        }, {
            name : "VENDOR_SITE_CODE",
            type : "text",
            canSave : false
        }, {
            name : "VENDOR_SITE",
            type : "text",
            canSave : false
        }, {
            name : "VENDOR_NAME",
            type : "text",
            canSave : false
        }],
        operationBindings : [ {
            operationType : "fetch",
            dataURL : "tp_info.jsp",
            requestProperties : {
                httpMethod : "POST"
            }
        } ],
        transformRequest : function(dsRequest) {
            return isc.addProperties(dsRequest.oldValues, dsRequest.data);
        }

    });

    var ds_contract = isc.DataSource.create({
        dataFormat : "json", // 数据格式 json格式
        fields : [ {
            name : "CONTRACT_NUM",
            type : "text",
            canSave : false
        }, {
            name : "FRE_ITEM_NUM",
            type : "text",
            canSave : false
        }, {
            name : "FRE_ITEM_DESC",
            type : "text",
            canSave : false
        },
            {
                name : "BAOSTEEL_NUM",
                type : "text",
                canSave : false
            }],
        operationBindings : [ {
            operationType : "fetch",
            dataURL : "tp_info.jsp",
            requestProperties : {
                httpMethod : "POST"
            }
        } ],
        transformRequest : function(dsRequest) {
            return isc.addProperties(dsRequest.oldValues, dsRequest.data);
        }

    });
    var ds_currency = isc.DataSource.create({
        dataFormat : "json", // 数据格式 json格式
        fields : [ {
            name : "CURRENCY_CODE",
            type : "text",
            canSave : false
        }],
        operationBindings : [ {
            operationType : "fetch",
            dataURL : "tp_info.jsp",
            requestProperties : {
                httpMethod : "POST"
            }
        } ],
        transformRequest : function(dsRequest) {
            return isc.addProperties(dsRequest.oldValues, dsRequest.data);
        }

    });

    ////////////////////////////////////////////////////////////////////////////////////////
    //button defination
    var editItemsStackLength = 0;//循环保存的信号量
    var callbackover=false;
    isc.IButton.create({
        ID : "saveButton_tp",
        title : "Save",
        left : "10%",
        top : 5,
        width : 80,
        click : "this.saveHeaders()",
        iconWidth : 24,

        savingLinesCallback : function (rpcResponse, data, rpcRequest) {
            //if (i==editItems.length-1)
            //labelLoading.destroy();
            //判断保存提示框是否应消失
            editItemsStackLength = editItemsStackLength - 1;
            callbackover=true;

            var JSONResult=isc.JSON.decode(data);
            if (JSONResult.result!="successed")
            {
                //出错提示
            isc.say("response from the server: " + JSONResult.result);
            }
            else
            {
                if (editItemsStackLength== 0 ){
                    labelLoading.destroy();
                    //刷新页面
                    findForm_tp.findItems();

                    tpHeaderForm.setValue("FreightContractNum","");
                    tpHeaderForm.setValue("BOAT_NAME","");
                    tpHeaderForm.setValue("LOADING_PORT","");
                    tpHeaderForm.setValue("DEPARTURE_DATE","");
                    tpHeaderForm.setValue("FreightType","");
                    tpHeaderForm.setValue("Description","");
                    tpHeaderForm.setValue("UNIT_PRICE","");
                    findForm_tp.setValue("BOAT_NAME","");
                    findForm_tp.setValue("DELIVERY_PORT","");

                }
            }
        },
        savingHeaderCallback : function (rpcResponse, data, rpcRequest) {
            var JSONResult=isc.JSON.decode(data);

            if (JSONResult.result!="successed")
            {
            isc.say("response from the server: " + JSONResult.result);
                labelLoading.destroy();
                return false;
            }else
            {
                this.saveItems();

            }

        },

        //保存头信息
saveHeaders:function()
{
    //校验header_From
    var headform=tpHeaderForm.validate();
    if(!headform)
    {
        isc.say("Pls enter necessary values");
        return false;
    }
    var datas = itemList_tp.data;

    var param = datas.get(0);

    var price = param["UNIT_PRICE"];
    if (typeof price == "undefined" || price == null ){
        isc.say("please input the UNIT_PRICE on the first row");
        return false;
    }

    //表头数据
    var header = tpHeaderForm.getValues();

    //copy表头数据至参数map
    param["hDescription"] = header ["Description"];
    param["hFreightType"] = header ["FreightType"];
    param["hCurrency"] = header ["Currency"];
    param["hDepartureDate"] = header ["DEPARTURE_DATE"];
    param["hPortofLoading"] = header ["LOADING_PORT"];
    param["hVoyageNum"] = header ["BOAT_NAME"];
    param["hShippingCoAddr"] = header ["ShippingCoAddr"];
    param["hFreightContractNum"] = header ["FreightContractNum"];

    var reqObj = {
        paramsOnly : true,
        params : param,
        callback : this.getID()+ ".savingHeaderCallback(rpcResponse, data, rpcRequest)",
        httpMethod : 'POST',
        actionURL : TP_SAVING_URL
    };
    //显示保存提示框
    isc.Label.create({
        ID: "labelLoading",
        padding: 10,
        width: "100%",
        height: "100%",
        align: "center",
        valign: "center",
        wrap: false, icon:
            "../../report/images/loading.gif",
        contents: "Saving..."
    });
    var status=isc.RPCManager.sendRequest(reqObj);
},
        //保存按钮点击处理方法
        saveItems : function() {
            //结束行编辑
            itemList_tp.endEditing();
            var line_submit=false;
            //保存前先判断表头是否有数据,先判断查询出来的数据长度是否大于0，若==0则，提示先查询
            var originalDataRows  =  itemList_tp.getOriginalData().length;
            if( typeof originalDataRows == "undefined" || originalDataRows == 0){
                isc.say("Pls find first");
                return false;
            }

            //校验header_From
            var headform=tpHeaderForm.validate();
            if(!headform)
            {
                isc.say("Pls enter necessary values");
                return false;
            }
            //得到被修改行的行号数组
            //var modifiedRowIndexs = itemList_tp.getAllEditRows();
            var datas = itemList_tp.data;
            //得到被修改的行数组
            var editItems = new Array();
            //alert(datas.length);
            /*
             for(var i=0;i<datas.length;i++){
             var data = datas.get(i);
             editItems.add(data);
             alert(data["CONTRACT_NUM"]);
             //alert(rows.get(i));
             }*/

            // var editItems = itemList_tp.data.localData;
            //var editItems = itemList_tp.getAllEditRows();

            if (datas.length > 0) {
                // validate row
                for ( var i = 0; i < datas.length; i++) {
                    if (!itemList_tp.validateRow(i)) {
                        isc.warn("Invalid input value");
                        return;
                    }
                }



                //循环提交数据
                //从1开始，第一行随头已经处理完毕
                for (i = 1; i < datas.length; i++) {
                    //var rpcMgr = isc.RPCManager;
                    //表明细数据-->参数map
                    var param = datas.get(i);
                    var price = param["UNIT_PRICE"];
                    if (typeof price == "undefined" || price == null ){
                        continue;
                    }
                    //alert(param["CONTRACT_NUM"]);


                    //表头数据
                    var header = tpHeaderForm.getValues();

                    //copy表头数据至参数map
                    param["hDescription"] = header ["Description"];
                    param["hFreightType"] = header ["FreightType"];
                    param["hCurrency"] = header ["Currency"];
                    param["hDepartureDate"] = header ["DEPARTURE_DATE"];
                    param["hPortofLoading"] = header ["LOADING_PORT"];
                    param["hVoyageNum"] = header ["BOAT_NAME"];
                    param["hShippingCoAddr"] = header ["ShippingCoAddr"];
                    param["hFreightContractNum"] = header ["FreightContractNum"];

                    //为新插入的记录赋值
                    if (param["RECORD_STATUS"]=="NEW")
                    {
                        param["BOAT_NAME"] = header ["BOAT_NAME"];
                        param["DEPARTURE_DATE"] = header ["DEPARTURE_DATE"];
                    }

                    //editItems.add(data);
                    //alert(param["AMOUNT"]);
                    var reqObj = {
                        paramsOnly : true,
                        params : param,
                        callback : this.getID()+ ".savingLinesCallback(rpcResponse, data, rpcRequest)",
                        httpMethod : 'POST',
                        actionURL : TP_SAVING_URL
                    };
                    editItemsStackLength = editItemsStackLength +  1;
                    callbackover=false;
                    isc.RPCManager.sendRequest(reqObj);
                    line_submit=true;
                }

                if (!line_submit)
                {
                    //刷新页面
                    findForm_tp.findItems();

                    tpHeaderForm.setValue("FreightContractNum","");
                    tpHeaderForm.setValue("BOAT_NAME","");
                    tpHeaderForm.setValue("LOADING_PORT","");
                    tpHeaderForm.setValue("DEPARTURE_DATE","");
                    tpHeaderForm.setValue("FreightType","");
                    tpHeaderForm.setValue("Description","");
                    tpHeaderForm.setValue("UNIT_PRICE","");
                    findForm_tp.setValue("BOAT_NAME","");
                    findForm_tp.setValue("DELIVERY_PORT","");
                }

                if (editItemsStackLength== 0 ){
                    labelLoading.destroy();
                }


                /*
                 for (var i=0;i< editItems.length;i++) { var
                 send_data=isc.JSONEncoder.create({}).encode(editItems[i]);
                 var data = { here: "is some data", to: ["send to the
                 server"]}; RPCManager.sendRequest({ data: data, callback:
                 "myCallback(data)", actionURL: "tp.jsp"}); function
                 myCallback(data) { // if (i==editItems.length-1)
                 // labelLoading.destroy(); alert("response from the server:
                 // " +
                 data); } }
                 */

                /*
                 * itemList_tp.saveAllEdits(null,function (dsResponse,
                 * data,dsRequest){ labelLoading.destroy();
                 * itemList_tp.invalidateCache();
                 * v_period=findForm_tp.getValue('ACCT_PERIOD_NO');
                 * itemList_tp.filterData({ACCT_PERIOD_NO:v_period}); } )
                 */
            } else {
                isc.say("No edit rows to be saved")
            }
        }


    });

    isc.IButton.create({
        ID : "findButton_tp",
        title : "Find",
        left : "55%",
        top : 1,
        width : 80,
        click : "findForm_tp.findItems()",
        iconWidth : 24
    });

    isc.IButton.create({
        ID : "newRecordButton_tp",
        title : "Edit New",
        left : "1%",
        top : 5,
        width : 80,
        click:"this.newLine()",
        iconWidth : 24,
        newLine :function(){
            //itemList_tp.data.localData.add({});
            //itemList_tp.startEditingNew();
            //itemList_tp.datasource.addData({});
            if (itemList_tp.data.length==0)
            {
                isc.say("please search first!!");
                return false;
            }

            $.tp.showSearchWindow();
        }
    });


    isc.IButton.create({
        ID : "dropRecordButton_tp",
        title : "Delete",
        width : 80,
        top:5,
        left:"20%",
        click:"this.dropLine()",
        dropLine :function(){
            itemList_tp.removeSelectedData();
            itemList_tp.saveAllEdits();
            $.tp.set_line_no(itemList_tp);

        }
    });
    ///////////////////////////////////////////////////////////////////////////////
    //form defination
    isc.SearchForm.create({
        ID : "findForm_tp",
        dataSource : ds_tp,
        left : "15%",
        top : 1,
        cellPadding : 4,
        numCols : 6,
        width : "40%",
        titleOrientation : "left",
        fields : [ {
            name : "BOAT_NAME",
            title : "Vessel/Voyage_No.",
            type : "text",
            defaultValue: "GANG QIANG V.211E",
            keyDown : function(item, form, keyName) {
                if (keyName == "Enter") {
                    findForm_tp.findItems();
                }
            }
        },
            {
                name : "DELIVERY_PORT",
                title : "Port_of_Delivery",
                type : "text",
                defaultValue: "ALTAMIRA,MEXICO",
                keyDown : function(item, form, keyName) {
                    if (keyName == "Enter") {
                        findForm_tp.findItems();
                    }
                }
            }

        ],

        // Function to actually find items
        findItems : function(BOAT_NAME,DELIVERY_PORT) {
            var findValues = this.getValue('BOAT_NAME');
            if (typeof findValues == "undefined" || findValues.length == 0){
                isc.say("Please input Vessel/Voyage No.");
                return false;
            }

            if (this.getValue('BOAT_NAME')) {
                // use tree category and form values
                if (BOAT_NAME == null)
                    findValues = {
                        BOAT_NAME : BOAT_NAME,
                        DELIVERY_PORT:DELIVERY_PORT

                    };
                isc.addProperties(findValues, this.getValues());

            } else if (BOAT_NAME == null) {
                // use form values only
                findValues = this.getValues();

            } else {
                // use tree category only
                findValues = {
                    BOAT_NAME : BOAT_NAME,
                    DELIVERY_PORT:DELIVERY_PORT
                };
            }

            //isc.say("BOAT_NAME:"+this.getValue('BOAT_NAME'));
            itemList_tp.invalidateCache();

            ds_tp.fetchData(
                findValues,
                function(dsResponse, data, dsRequest) {
                    // 设置listgrid中的值
                    itemList_tp.setData(data);
                    //设置行号
                    for (i=1;i<=itemList_tp.data.length;i++)
                    {
                        itemList_tp.setEditValue(i-1, "LINE_NO", i);
                        itemList_tp.setEditValue(i-1, "RECORD_STATUS", "UPDATE");
                    }
                    var record = itemList_tp.getRecord(0);
                    if (record != null) {
                        tpHeaderForm.editRecord(record);
                    }
                    itemList_tp.saveAllEdits();
                }
            );

            //listgrid_result = itemList_tp.filterData(findValues,this.getID()+".fillHeader()");

            /*
             * itemList_tp.filterData({ appID: "SecureAppDMI", className:
             * "SecureAppDMI", methodName: "login", requestParams: { actionURL:
             * "/examples/secureApp/IDACall", containsCredentials: true, params : {
             * username: credentials.username, password: credentials.password } },
             * callback : function (response, data) { if (form){
             * form.clearValues(); form.clearErrors(true); }
             *
             * if (response.status == isc.RPCResponse.STATUS_SUCCESS) {
             * isc.RPCManager.doResendTransaction(); delete
             * this.transactionsToResubmit; dialogCallback(true); } else { if
             * (form) { form.setFieldErrors("usernameItem", "Login failed:
             * please check username and password.", false);
             * form.setFieldErrors("passwordItem", "Login failed: please check
             * username and password.", true); } dialogCallback(false); } } });
             */

            // itemDetailTabs.clearDetails();
        },
        //查询(find)完成后，填写head form
        fillHeader : function(){
            var record = itemList_tp.getRecord(0);
            if (record != null) {
                tpHeaderForm.editRecord(record);
            }
        }
    });

    isc.DynamicForm.create({
        ID : "tpHeaderForm",
        dataSource : ds_tp,
        cellPadding : 4,
        numCols : 24,
        width : 500,
        fields : [ {
            name : "FreightContractNum",
            title : "FreightContractNum",
            type : "text",
            required : true,
            //defaultValue : "bob",
            colSpan : 5
        }, {
            name : "ShippingCoAddr",
            title : "ShippingCo.Addr",
            required : true,
            editorType : "comboBox",
            pickListWidth : 250,
            colSpan : 5,
            optionDataSource:ds_vendor,
            displayField:"VENDOR_NAME", valueField:"VENDOR_SITE_ID",
            pickListCriteria:{ SEARCH_TYPE : "VENDOR" },
            pickListFields:[
                {name:"VENDOR_SITE"},
                {name:"VENDOR_NAME"}
            ]
        }, {
            name : "BOAT_NAME",
            title : "Vessel/VoyageNo.",
            required : true,
            type : "text",
            colSpan : 5
        }, {
            name : "LOADING_PORT",
            required : true,
            title : "PortofLoading",
            type : "text",
            colSpan : 5
        }, {
            name : "DEPARTURE_DATE",
            required : true,
            title : "DepartureDate",
            type : "date",
            useTextField : "true",
            colSpan : 5
        }, {
            name : "Currency",
            title : "Currency",
            required : true,
            editorType : "comboBox",
            pickListWidth : 250,
            colSpan : 5,
            defaultValue : "USD"
        }, {
            name : "FreightType",
            required : false,
            title : "FreightType",
            type : "text",
            //width : 200,
            colSpan : 5,
            defaultValue : "Freight"
        }, {
            name : "Description",
            required : false,
            title : "Description",
            type : "text",
            length : 200,
            width : "*",
            colSpan : 10
        },
            {
                name : "UNIT_PRICE",
                required : false,
                title : "UNIT_PRICE",
                type : "text",
                keyPressFilter: "[0-9.]",
                colSpan : 10
            }
        ]
    });
    isc.IButton.create({
        ID : "COPY_UNIT_PRICE",
        title : "COPY_UNIT_PRICE",
        left : "75%",
        top:63,
        width : 100,
        click : "this.copy_unit_price()",
        iconWidth : 24,
        copy_unit_price:function ()
        {

            var datas =itemList_tp.data;
            var v_copy_value=tpHeaderForm.getValue('UNIT_PRICE');
            if (typeof v_copy_value == "undefined" || v_copy_value.length == 0){
                isc.say("Please input UNIT_PRICE");
                return false;
            }
            for(i=0;i<datas.length;i++)
            {
                if (itemList_tp.isSelected(datas[i]))
                {
                    itemList_tp.setEditValue(i, "UNIT_PRICE", v_copy_value);
                    itemList_tp.setEditValue(i, "AMOUNT", v_copy_value*datas[i]["SHIP_QTY"]);
                }
            }
            itemList_tp.saveAllEdits();

        }
    })
    ///////////////////////////////////////////////////////////////////////////////
    //ListGrid defination
    var selfModifiedFlag = false;
    isc.ListGrid
        .create({
            ID : "itemList_tp",
            width : "100%",
            height : "80%",
            left : 20,
            showGridSummary : true,
            useAllDataSourceFields : false,
            emptyCellValue : "--",
            //data:grid_date,
            // saveByCell:true,
            canEdit : true,
            editEvent : "doubleClick",
            modalEditing : true,
            alternateRecordStyles : true,
            hoverWidth : 200,
            hoverHeight : 20,
            autoFetchData:false,
            selectionAppearance:"checkbox",
            baseStyle : "myOtherGridCell",

            fields : [
                {
                    name : "LINE_NO",
                    type : "text",
                    title : "Line NO.",
                    width : 50,
                    showHover : true,
                    required : true,
                    canEdit:false
                },
                {
                    name : "INVOICE_NUM",
                    type : "text",
                    title : "Invoice Num",
                    width : 100,
                    showHover : true,
                    required : true,
                    canEdit:true
                },
                {
                    name : "CONTRACT_NUM",
                    type : "text",
                    title : "Contract Num",
                    width : 100,
                    showHover : true,
                    required : true,
                    canEdit:false
                }, {
                    name : "BAOSTEEL_NUM",
                    type : "text",
                    title : "Baosteel Num",
                    width : 100,
                    canEdit:false
                },
                {
                    name : "BOAT_NAME",
                    type : "text",
                    title : "Vessel/Voyage No.",
                    required : true,
                    width : 100,
                    canEdit:false
                },{
                    name : "VOYAGE_NUM",
                    type : "text",
                    title : "Voyage Num",
                    required : true,
                    width : 100,
                    canEdit:false
                }, {
                    name : "BILL_OF_LADING",
                    type : "text",
                    title : "Bill Of Lading",
                    width : 100,
                    canEdit:false
                }, {
                    name : "DELIVERY_PORT",
                    type : "text",
                    title : "Port of Delivery",
                    width : 100,
                    required : true,
                    canEdit:true
                }, {
                    name : "FRE_ITEM_NUM",
                    type : "text",
                    title : "FreItemNum",
                    required : true,
                    width : 100,
                    canEdit:false
                }, {
                    name : "ORDERED_QTY",
                    type : "float",
                    title : "Order Qty",
                    width : 80,
                    validators : [ {
                        type : "isFloat"
                    } ],
                    showGridSummary : false,
                    formatCellValue : "isc.Format.toUSString(value)",
                    canEdit:true
                }, {
                    name : "SHIP_QTY",
                    type : "float",
                    title : "Ship Qty",
                    required : true,
                    width : 80,
                    validators : [ {
                        type : "isFloat"
                    } ],
                    showGridSummary : true,
                    formatCellValue : function(value, record) {
                        record.SHIP_QTY = value;
                        return isc.Format.toUSString(value);
                    },
                    canEdit:true
                }, {
                    name : "UOM",
                    type : "text",
                    title : "Uom",
                    width : 60,
                    required : true,
                    canEdit:false
                }, {
                    name : "UNIT_PRICE",
                    type : "float",
                    title : "Unit Price",
                    width : 100,
                    showGridSummary : false,
                    validators : [ {
                        type : "isFloat"
                    } ],
                    formatCellValue : function(value, record, rowNum, colNum) {
                        return isc.Format.toUSString(value);

                    }
                }, {
                    name : "AMOUNT",
                    type : "float",
                    title : "Amount",
                    required : true,
                    width : 100,
                    validators : [ {
                        type : "isFloat"
                    } ],
                    showGridSummary : true,

                    formatCellValue : function(value, record) {
                        return isc.Format.toUSString(value,2);
                    }

                }, {
                    name : "ArrivalDate",
                    type : "date",
                    title : "Arrival Date",
                    formatCellValue : function(value) {
                        if (value) {
                            try {
                                return value.toSerializeableDate().substring(0, 10);
                            }catch(ex){
                                return;
                            }
                        }
                    }
                }, {
                    name : "FRE_ITEM_DESC",
                    type : "text",
                    title : "Fre Item Desc",
                    width : 400,
                    canEdit:false
                },
                {
                    name : "RECORD_STATUS",
                    type : "text",
                    canEdit:false,
                    showIf:"false"
                }
            ],

            canEditCell : function (rowNum, colNum) {
                var record = this.getRecord(rowNum),
                    fieldName = this.getFieldName(colNum);
                if (record.RECORD_STATUS=="NEW")
                {
                    return true;
                }
                else
                {
                    if(fieldName=="SHIP_QTY"||fieldName=="ORDERED_QTY"||fieldName=="INVOICE_NUM"||fieldName=="DELIVERY_PORT")
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }


                }

                // use default rules for all other fields
                //return this.Super("canEditCell", arguments);
            },
            /*
             updateDetails : function () {
             var record = this.getSelectedRecord();
             if (record == null) return;
             tpHeaderForm.editRecord(record);

             },*/
            //遗留问题：相互计算问题:
            //如果录入总数，单价=保留小数2位(总数/数量)；
            //单价被修改后，进一步触发单价修改事件，进而反过来修改了总数
            editorExit  : function(editCompletionEvent, record, newValue, rowNum, colNum) {
                //判断是人为修改进入，还是根据另外一个列自动计算修改后进入
                /*	selfModifiedFlag =  !selfModifiedFlag; //先设置信号变量
                 if(!selfModifiedFlag){ //非人为修改
                 return false;
                 }*/
                var fieldName = this.getFieldName(colNum);
                var unitPrice = 0;
                //读取数量
                if (typeof record == "undefined" || record == null ){//适用新增
                    //record  = this.getEditValues(rowNum);
                    record  = this.getEditedRecord(rowNum);
                }
                var shipQty = record.SHIP_QTY;

                if (fieldName == 'AMOUNT') {//总数修改
                    //if (newValue != oldValue) {
                    if (this.cellHasChanges(rowNum,colNum)){
                        var countUnitPrice = (newValue / shipQty).toFixed(2);
                        //this.setEditValue(rowNum, "AMOUNT", newValue);
                        this.setEditValue(rowNum, "UNIT_PRICE", countUnitPrice);
                        //isc.say((newValue / record.SHIP_QTY).toFixed(2));
                    }
                    // this.refreshCell(rowNum,
                    // this.getFieldNum('UNIT_PRICE'),true,true);
                    // return newValue;
                    // this.refreshCell(rowNum, this.getFieldNum('Amount'));
                }
                if (fieldName == 'UNIT_PRICE') {//单价修改
                    if (this.cellHasChanges(rowNum,colNum)){
                        var v_unit_price;
                        try {
                            v_unit_price = parseFloat(newValue);
                            if (v_unit_price == "NaN") {
                                return;
                            }
                        } catch (ex) {
                            return;
                        }
                        //record.UNIT_PRICE = v_unit_price;
                        // 根据输入的UNIT_PRICE计算Amount
                        var current_amount = (v_unit_price * shipQty).toFixed(2);
                        //this.setEditValue(rowNum, "UNIT_PRICE", v_unit_price);
                        this.setEditValue(rowNum, "AMOUNT", current_amount);
                        //record.AMOUNT = current_amount;
                    }
                }
                //itemList_tp.markForRedraw();
            }


        });

    // Define application layout
    // ---------------------------------------------------------------------
    labelLoadinginit.destroy();
    // 查找下找框中的数据

    /*	ds_vendor.fetchData(
     { SEARCH_TYPE : "VENDOR" },
     function(dsResponse, data, dsRequest) {
     // 设置Combox中的值
     *//*
     tpHeaderForm.getField("ShippingCoAddr").setValueMap(
     data.getValueMap("VENDOR_SITE_ID", "VENDOR_SITE_CODE")
     );

     }
     );*/
	ds_currency.fetchData(
     { SEARCH_TYPE : "CURRENCY" },
     function(dsResponse, data, dsRequest) {
     // 设置Combox中的值
     tpHeaderForm.getField("Currency").setValueMap(
     data.getValueMap("CURRENCY_CODE", "CURRENCY_CODE")
     );
     }
     );

    isc.HLayout.create({
        ID : "pageLayout_tp",
        width : "100%",
        height : "100%",
        layoutMargin : 5,
        members : [ isc.SectionStack.create({
            ID : "rightSideLayout_tp",
            visibilityMode : "multiple",
            animateSections : true,
            align : "center",
            sections : [ {
                title : "Search",
                autoShow : true,
                items : [ isc.Canvas.create({
                    ID : "findPane_tp",
                    height : 35,
                    overflow : "auto",
                    styleName : "defaultBorder",
                    children : [ findForm_tp, findButton_tp]
                }) ]
            }, {
                title : "FreightContractHeader",
                autoShow : true,
                items : [ isc.Canvas.create({
                    ID : "headerPane_tp",
                    height : 150,
                    overflow : "auto",
                    styleName : "defaultBorder",
                    children : [ tpHeaderForm,COPY_UNIT_PRICE]
                })

                ]
            }, {
                title : "FreightContractLine",
                autoShow : true,
                items : [itemList_tp,
                    isc.Canvas.create({
                        ID : "linePane_tp",
                        height : 30,
                        overflow : "auto",
                        styleName : "defaultBorder",
                        children : [newRecordButton_tp, saveButton_tp,dropRecordButton_tp]
                    })
                ]
            } ]
        }) ]
    })

    $.tp.showSearchWindow = function(){

        itemList_contract.selectAllRecords();
        itemList_contract.removeSelectedData();
        itemList_contract.deselectAllRecords();

        if(this.windows["showSearchWindow"]){

            this.windows["showSearchWindow"].show();
            return;

        };

        this.windows["showSearchWindow"] = isc.Window.create({
            width: "60%", height: "60%", title: "Find Contracts",
            showShadow: true, showModalMask: true, isModal: true, autoCenter: true,
            items: [ isc.Canvas.create({
                ID : "search_contracts_tp",
                height : 40,
                overflow : "auto",
                styleName : "defaultBorder",
                children : [findForm_contract,FIND_CONTRACTS,ADD_CONTRACTS]
            }),itemList_contract]
        });

    };
    isc.ListGrid
        .create({
            ID : "itemList_contract",
            width : "100%",
            height : "80%",
            left:1,
            top:10,
            useAllDataSourceFields : false,
            emptyCellValue : "--",
            // saveByCell:true,
            canEdit : false,
            modalEditing : true,
            alternateRecordStyles : true,
            autoFetchData:false,
            selectionAppearance:"checkbox",
            baseStyle : "myOtherGridCell",
            autoDraw:false,
            fields : [
                {
                    name : "LINE_NO",
                    type : "text",
                    title : "Line NO.",
                    width : 50,
                    showHover : true,
                    required : true,
                    canEdit:false
                },
                {
                    name : "CONTRACT_NUM",
                    type : "text",
                    title : "Contract Num",
                    width : 150,
                    showHover : true,
                    required : true,
                    canEdit:false
                },
                {
                    name : "BAOSTEEL_NUM",
                    type : "text",
                    title : "Baosteel Num",
                    width : 150,
                    canEdit:false
                },
                {
                    name : "FRE_ITEM_NUM",
                    type : "text",
                    title : "FreItemNum",
                    required : true,
                    width : 150,
                    canEdit:false
                }, {
                    name : "FRE_ITEM_DESC",
                    type : "text",
                    title : "Fre Item Desc",
                    width : 500,
                    canEdit:false
                }  ,

                {
                    name : "RECORD_STATUS",
                    type : "text",
                    canEdit:false,
                    showIf:"false"
                }]

        })
        ,


        isc.IButton.create({
            ID : "FIND_CONTRACTS",
            title : "Find",
            width : 80,
            top:5,
            left:"30%",
            autoDraw:false,
            click:"findForm_contract.findItems()"});


    isc.IButton.create({
        ID : "ADD_CONTRACTS",
        title : "Add",
        width : 80,
        top:5,
        autoDraw:false,
        left:"45%",
        click:"findForm_contract.addContracts()"});

    isc.SearchForm.create({
        ID : "findForm_contract",
        top : 1,
        cellPadding : 4,
        numCols : 24,
        width : "30%",
        titleOrientation : "left",
        autoDraw:false,
        fields : [ {
            name : "CONTRACT_NUM",
            title : "Contract NUM",
            type : "text",
            defaultValue: "OC2B493",
            colSpan:5,
            keyDown : function(item, form, keyName) {
                if (keyName == "Enter") {
                    this.findItems();
                }
            }
        }
        ],

        // Function to actually find items
        findItems : function(CONTRACT_NUM) {
            var findValues = this.getValue('CONTRACT_NUM');
            if (typeof findValues == "undefined" || findValues.length == 0){
                isc.say("Please input Contract NUM");
                return false;
            }

            if (this.getValue('CONTRACT_NUM')) {
                // use tree category and form values
                if (CONTRACT_NUM == null)
                    findValues = {
                        CONTRACT_NUM : CONTRACT_NUM
                    };
                isc.addProperties(findValues, this.getValues());

            } else if (CONTRACT_NUM == null) {
                // use form values only
                findValues = this.getValues();

            } else {
                // use tree category only
                findValues = {
                    CONTRACT_NUM : CONTRACT_NUM
                };
            }

            //isc.say("BOAT_NAME:"+this.getValue('BOAT_NAME'));
            itemList_contract.invalidateCache();


            ds_contract.fetchData(
                findValues,
                function(dsResponse, data, dsRequest) {
                    // 设置listgrid中的值
                    itemList_contract.setData(data);
                    //设置行号
                    for (i=1;i<=itemList_contract.data.length;i++)
                    {
                        itemList_contract.setEditValue(i-1, "LINE_NO", i);
                        itemList_contract.setEditValue(i-1, "RECORD_STATUS", "NEW");
                    }

                    itemList_contract.saveAllEdits();
                }
            );


        },

        addContracts : function() {
            var tp_records_count=itemList_tp.data.length;
            var data=itemList_tp.data[0];
            var selected_contracts=itemList_contract.getSelectedRecords();
            if (selected_contracts.length>0){
                for (i=0;i<selected_contracts.length;i++)
                {
                    itemList_tp.addData({
                        LINE_NO:tp_records_count+i+1,
                        CONTRACT_NUM:selected_contracts[i]["CONTRACT_NUM"],
                        FRE_ITEM_NUM:selected_contracts[i]["FRE_ITEM_NUM"],
                        FRE_ITEM_DESC:selected_contracts[i]["FRE_ITEM_DESC"],
                        BAOSTEEL_NUM:selected_contracts[i]["BAOSTEEL_NUM"],
                        UOM:"MT",
                        RECORD_STATUS:selected_contracts[i]["RECORD_STATUS"]
                    });
                }

                $.tp.set_line_no(itemList_tp);
                $.tp.windows["showSearchWindow"].hide();
            }




        }

    });

})(overseas.tp);