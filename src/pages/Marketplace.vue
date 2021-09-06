<template>
    <div class="container-fluid" style="min-height: 500px">
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" @click="closeSidebar">&times;</a>
            <div class="sidebarWrapper">
                <div>
                    <p class="sidebarHeader">Sort By</p>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="token_id_lowest" v-model="sortBy.token_id_lowest" @change="changeSortBy($event)" data-id="token_id_lowest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="token_id_lowest" class="form-check-label chLabel">Lowest token id</label>
                        </div>
                    </div>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="token_id_highest" v-model="sortBy.token_id_highest" @change="changeSortBy($event)" data-id="token_id_highest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="token_id_highest" class="form-check-label chLabel">Highest token id</label>
                        </div>
                    </div>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="price_lowest" v-model="sortBy.price_lowest" @change="changeSortBy($event)" data-id="price_lowest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="price_lowest" class="form-check-label chLabel">Lowest price</label>
                        </div>
                    </div>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="price_highest" v-model="sortBy.price_highest" @change="changeSortBy($event)" data-id="price_highest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="price_highest" class="form-check-label chLabel">Highest price</label>
                        </div>
                    </div>
                    <!-- <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="bid_lowest" v-model="sortBy.bid_lowest" @change="changeSortBy($event)" data-id="bid_lowest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="bid_lowest" class="form-check-label chLabel">Lowest bid</label>
                        </div>
                    </div>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="bid_highest" v-model="sortBy.bid_highest" @change="changeSortBy($event)" data-id="bid_highest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="bid_highest" class="form-check-label chLabel">Highest bid</label>
                        </div>
                    </div> -->
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="rank_lowest" v-model="sortBy.rank_lowest" @change="changeSortBy($event)" data-id="rank_lowest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="rank_lowest" class="form-check-label chLabel">Lowest rank</label>
                        </div>
                    </div>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="rank_highest" v-model="sortBy.rank_highest" @change="changeSortBy($event)" data-id="rank_highest" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="rank_highest" class="form-check-label chLabel">Highest rank</label>
                        </div>
                    </div>
                    <p class="sidebarHeader">Attribute Count</p>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_attr_count" v-model="attr_count.all" @change="changeAttrCount($event)" data-id="all" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_attr_count" class="form-check-label chLabel">All</label>
                        </div>
                        <div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_0" @change="changeAttrCount($event)" v-model="attr_count['0']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_0" class="form-check-label chLabel">0 ({{ filter_data.attribute_count[0] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_1" @change="changeAttrCount($event)" v-model="attr_count['1']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_1" class="form-check-label chLabel">1 ({{ filter_data.attribute_count[1] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_2" @change="changeAttrCount($event)" v-model="attr_count['2']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_2" class="form-check-label chLabel">2 ({{ filter_data.attribute_count[2] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_3" @change="changeAttrCount($event)" v-model="attr_count['3']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_3" class="form-check-label chLabel">3 ({{ filter_data.attribute_count[3] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_4" @change="changeAttrCount($event)" v-model="attr_count['4']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_4" class="form-check-label chLabel">4 ({{ filter_data.attribute_count[4] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_5" @change="changeAttrCount($event)" v-model="attr_count['5']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_5" class="form-check-label chLabel">5 ({{ filter_data.attribute_count[5] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_6" @change="changeAttrCount($event)" v-model="attr_count['6']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_6" class="form-check-label chLabel">6 ({{ filter_data.attribute_count[6] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_7" @change="changeAttrCount($event)" v-model="attr_count['7']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_7" class="form-check-label chLabel">7 ({{ filter_data.attribute_count[7] || 0 }})</label>
                            </div>
                        </div>
                    </div>
                    <p class="sidebarHeader">Punk Type</p>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_type" v-model="types.all" @change="changeType($event)" data-id="all" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_type" class="form-check-label chLabel">All</label>
                        </div>
                        <div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Female" @change="changeType($event)" v-model="types.Female" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Female" class="form-check-label chLabel">Female ({{ filter_data.punk_type["Female"] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Male" @change="changeType($event)" v-model="types.Male" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Male" class="form-check-label chLabel">Male ({{ filter_data.punk_type["Male"] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Crypto" @change="changeType($event)" v-model="types.Crypto" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Crypto" class="form-check-label chLabel">Crypto Friend ({{ filter_data.punk_type["Crypto"] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Zombie" @change="changeType($event)" v-model="types.Zombie" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Zombie" class="form-check-label chLabel">Zombie ({{ filter_data.punk_type["Zombie"] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Ape" @change="changeType($event)" v-model="types.Ape" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Ape" class="form-check-label chLabel">Ape ({{ filter_data.punk_type["Ape"] || 0 }})</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Alien" @change="changeType($event)" v-model="types.Alien" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Alien" class="form-check-label chLabel">Alien ({{ filter_data.punk_type["Alien"] || 0 }})</label>
                            </div>
                        </div>
                    </div>
                    <p class="sidebarHeader">Punk Attributes</p>
                    <div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_1" v-model="checkbox.all" @change="changeAttr($event)" data-id="all" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_1" class="form-check-label chLabel">All</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_DGlasses" @change="changeAttr($event)" v-model="checkbox.DGlasses" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_DGlasses" class="form-check-label chLabel">3D Glasses ({{ filter_data.punk_Attribute["DGlasses"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Bandana" @change="changeAttr($event)" v-model="checkbox.Bandana" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Bandana" class="form-check-label chLabel">Bandana ({{ filter_data.punk_Attribute["Bandana"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Beanie" @change="changeAttr($event)" v-model="checkbox.Beanie" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Beanie" class="form-check-label chLabel">Beanie ({{ filter_data.punk_Attribute["Beanie"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BigBeard" @change="changeAttr($event)" v-model="checkbox.BigBeard" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BigBeard" class="form-check-label chLabel">Big Beard ({{ filter_data.punk_Attribute["BigBeard"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BigShades" @change="changeAttr($event)" v-model="checkbox.BigShades" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BigShades" class="form-check-label chLabel">Big Shades ({{ filter_data.punk_Attribute["BigShades"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlackLipstick" @change="changeAttr($event)" v-model="checkbox.BlackLipstick" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlackLipstick" class="form-check-label chLabel">Black Lipstick ({{ filter_data.punk_Attribute["BlackLipstick"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlondeBob" @change="changeAttr($event)" v-model="checkbox.BlondeBob" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlondeBob" class="form-check-label chLabel">Blonde Bob ({{ filter_data.punk_Attribute["BlondeBob"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlondeShort" @change="changeAttr($event)" v-model="checkbox.BlondeShort" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlondeShort" class="form-check-label chLabel">Blonde Short ({{ filter_data.punk_Attribute["BlondeShort"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlueEyeShadow" @change="changeAttr($event)" v-model="checkbox.BlueEyeShadow" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlueEyeShadow" class="form-check-label chLabel">Blue Eye Shadow ({{ filter_data.punk_Attribute["BlueEyeShadow"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BuckTeeth" @change="changeAttr($event)" v-model="checkbox.BuckTeeth" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BuckTeeth" class="form-check-label chLabel">Buck Teeth ({{ filter_data.punk_Attribute["BuckTeeth"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Cap" @change="changeAttr($event)" v-model="checkbox.Cap" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Cap" class="form-check-label chLabel">Cap ({{ filter_data.punk_Attribute["Cap"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CapForward" @change="changeAttr($event)" v-model="checkbox.CapForward" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CapForward" class="form-check-label chLabel">Cap Forward ({{ filter_data.punk_Attribute["CapForward"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Chinstrap" @change="changeAttr($event)" v-model="checkbox.Chinstrap" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Chinstrap" class="form-check-label chLabel">Chinstrap ({{ filter_data.punk_Attribute["Chinstrap"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Choker" @change="changeAttr($event)" v-model="checkbox.Choker" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Choker" class="form-check-label chLabel">Choker ({{ filter_data.punk_Attribute["Choker"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Cigarette" @change="changeAttr($event)" v-model="checkbox.Cigarette" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Cigarette" class="form-check-label chLabel">Cigarette ({{ filter_data.punk_Attribute["Cigarette"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClassicShades" @change="changeAttr($event)" v-model="checkbox.ClassicShades" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClassicShades" class="form-check-label chLabel">Classic Shades ({{ filter_data.punk_Attribute["ClassicShades"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownEyesBlue" @change="changeAttr($event)" v-model="checkbox.ClownEyesBlue" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownEyesBlue" class="form-check-label chLabel">Clown Eyes Blue ({{ filter_data.punk_Attribute["ClownEyesBlue"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownEyesGreen" @change="changeAttr($event)" v-model="checkbox.ClownEyesGreen" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownEyesGreen" class="form-check-label chLabel">Clown Eyes Green ({{ filter_data.punk_Attribute["ClownEyesGreen"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownHairGreen" @change="changeAttr($event)" v-model="checkbox.ClownHairGreen" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownHairGreen" class="form-check-label chLabel">Clown Hair Green ({{ filter_data.punk_Attribute["ClownHairGreen"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownNose" @change="changeAttr($event)" v-model="checkbox.ClownNose" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownNose" class="form-check-label chLabel">Clown Nose ({{ filter_data.punk_Attribute["ClownNose"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CowboyHat" @change="changeAttr($event)" v-model="checkbox.CowboyHat" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CowboyHat" class="form-check-label chLabel">Cowboy Hat ({{ filter_data.punk_Attribute["CowboyHat"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CrazyHair" @change="changeAttr($event)" v-model="checkbox.CrazyHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CrazyHair" class="form-check-label chLabel">Crazy Hair ({{ filter_data.punk_Attribute["CrazyHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_DarkHair" @change="changeAttr($event)" v-model="checkbox.DarkHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_DarkHair" class="form-check-label chLabel">Dark Hair ({{ filter_data.punk_Attribute["DarkHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Dorag" @change="changeAttr($event)" v-model="checkbox.Dorag" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Dorag" class="form-check-label chLabel">Do-rag ({{ filter_data.punk_Attribute["Dorag"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Earring" @change="changeAttr($event)" v-model="checkbox.Earring" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Earring" class="form-check-label chLabel">Earring ({{ filter_data.punk_Attribute["Earring"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_EyeMask" @change="changeAttr($event)" v-model="checkbox.EyeMask" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_EyeMask" class="form-check-label chLabel">Eye Mask ({{ filter_data.punk_Attribute["EyeMask"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_EyePatch" @change="changeAttr($event)" v-model="checkbox.EyePatch" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_EyePatch" class="form-check-label chLabel">Eye Patch ({{ filter_data.punk_Attribute["EyePatch"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Fedora" @change="changeAttr($event)" v-model="checkbox.Fedora" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Fedora" class="form-check-label chLabel">Fedora ({{ filter_data.punk_Attribute["Fedora"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrontBeard" @change="changeAttr($event)" v-model="checkbox.FrontBeard" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrontBeard" class="form-check-label chLabel">Front Beard ({{ filter_data.punk_Attribute["FrontBeard"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrontBeardDark" @change="changeAttr($event)" v-model="checkbox.FrontBeardDark" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrontBeardDark" class="form-check-label chLabel">Front Beard Dark ({{ filter_data.punk_Attribute["FrontBeardDark"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Frown" @change="changeAttr($event)" v-model="checkbox.Frown" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Frown" class="form-check-label chLabel">Frown ({{ filter_data.punk_Attribute["Frown"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrumpyHair" @change="changeAttr($event)" v-model="checkbox.FrumpyHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrumpyHair" class="form-check-label chLabel">Frumpy Hair ({{ filter_data.punk_Attribute["FrumpyHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Goat" @change="changeAttr($event)" v-model="checkbox.Goat" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Goat" class="form-check-label chLabel">Goat ({{ filter_data.punk_Attribute["Goat"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_GoldChain" @change="changeAttr($event)" v-model="checkbox.GoldChain" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_GoldChain" class="form-check-label chLabel">Gold Chain ({{ filter_data.punk_Attribute["GoldChain"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_GreenEyeShadow" @change="changeAttr($event)" v-model="checkbox.GreenEyeShadow" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_GreenEyeShadow" class="form-check-label chLabel">Green Eye Shadow ({{ filter_data.punk_Attribute["GreenEyeShadow"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HalfShaved" @change="changeAttr($event)" v-model="checkbox.HalfShaved" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HalfShaved" class="form-check-label chLabel">Half Shaved ({{ filter_data.punk_Attribute["HalfShaved"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Handlebars" @change="changeAttr($event)" v-model="checkbox.Handlebars" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Handlebars" class="form-check-label chLabel">Handlebars ({{ filter_data.punk_Attribute["Handlebars"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Headband" @change="changeAttr($event)" v-model="checkbox.Headband" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Headband" class="form-check-label chLabel">Headband ({{ filter_data.punk_Attribute["Headband"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Hoodie" @change="changeAttr($event)" v-model="checkbox.Hoodie" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Hoodie" class="form-check-label chLabel">Hoodie ({{ filter_data.punk_Attribute["Hoodie"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HornedRimGlasses" @change="changeAttr($event)" v-model="checkbox.HornedRimGlasses" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HornedRimGlasses" class="form-check-label chLabel">Horned Rim Glasses ({{ filter_data.punk_Attribute["HornedRimGlasses"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HotLipstick" @change="changeAttr($event)" v-model="checkbox.HotLipstick" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HotLipstick" class="form-check-label chLabel">Hot Lipstick ({{ filter_data.punk_Attribute["HotLipstick"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_KnittedCap" @change="changeAttr($event)" v-model="checkbox.KnittedCap" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_KnittedCap" class="form-check-label chLabel">Knitted Cap ({{ filter_data.punk_Attribute["KnittedCap"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_LuxuriousBeard" @change="changeAttr($event)" v-model="checkbox.LuxuriousBeard" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_LuxuriousBeard" class="form-check-label chLabel">Luxurious Beard ({{ filter_data.punk_Attribute["LuxuriousBeard"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MedicalMask" @change="changeAttr($event)" v-model="checkbox.MedicalMask" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MedicalMask" class="form-check-label chLabel">Medical Mask ({{ filter_data.punk_Attribute["MedicalMask"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MessyHair" @change="changeAttr($event)" v-model="checkbox.MessyHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MessyHair" class="form-check-label chLabel">Messy Hair ({{ filter_data.punk_Attribute["MessyHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mohawk" @change="changeAttr($event)" v-model="checkbox.Mohawk" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mohawk" class="form-check-label chLabel">Mohawk ({{ filter_data.punk_Attribute["Mohawk"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MohawkDark" @change="changeAttr($event)" v-model="checkbox.MohawkDark" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MohawkDark" class="form-check-label chLabel">Mohawk Dark ({{ filter_data.punk_Attribute["MohawkDark"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MohawkThin" @change="changeAttr($event)" v-model="checkbox.MohawkThin" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MohawkThin" class="form-check-label chLabel">Mohawk Thin ({{ filter_data.punk_Attribute["MohawkThin"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mole" @change="changeAttr($event)" v-model="checkbox.Mole" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mole" class="form-check-label chLabel">Mole ({{ filter_data.punk_Attribute["Mole"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mustache" @change="changeAttr($event)" v-model="checkbox.Mustache" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mustache" class="form-check-label chLabel">Mustache ({{ filter_data.punk_Attribute["Mustache"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Muttonchops" @change="changeAttr($event)" v-model="checkbox.Muttonchops" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Muttonchops" class="form-check-label chLabel">Muttonchops ({{ filter_data.punk_Attribute["Muttonchops"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NerdGlasses" @change="changeAttr($event)" v-model="checkbox.NerdGlasses" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NerdGlasses" class="form-check-label chLabel">Nerd Glasses ({{ filter_data.punk_Attribute["NerdGlasses"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NormalBeard" @change="changeAttr($event)" v-model="checkbox.NormalBeard" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NormalBeard" class="form-check-label chLabel">Normal Beard ({{ filter_data.punk_Attribute["NormalBeard"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NormalBeardBlack" @change="changeAttr($event)" v-model="checkbox.NormalBeardBlack" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NormalBeardBlack" class="form-check-label chLabel">Normal Beard Black ({{ filter_data.punk_Attribute["NormalBeardBlack"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_OrangeSide" @change="changeAttr($event)" v-model="checkbox.OrangeSide" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_OrangeSide" class="form-check-label chLabel">Orange Side ({{ filter_data.punk_Attribute["OrangeSide"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PeakSpike" @change="changeAttr($event)" v-model="checkbox.PeakSpike" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PeakSpike" class="form-check-label chLabel">Peak Spike ({{ filter_data.punk_Attribute["PeakSpike"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Pigtails" @change="changeAttr($event)" v-model="checkbox.Pigtails" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Pigtails" class="form-check-label chLabel">Pigtails ({{ filter_data.punk_Attribute["Pigtails"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PilotHelmet" @change="changeAttr($event)" v-model="checkbox.PilotHelmet" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PilotHelmet" class="form-check-label chLabel">Pilot Helmet ({{ filter_data.punk_Attribute["PilotHelmet"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PinkWithHat" @change="changeAttr($event)" v-model="checkbox.PinkWithHat" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PinkWithHat" class="form-check-label chLabel">Pink With Hat ({{ filter_data.punk_Attribute["PinkWithHat"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Pipe" @change="changeAttr($event)" v-model="checkbox.Pipe" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Pipe" class="form-check-label chLabel">Pipe ({{ filter_data.punk_Attribute["Pipe"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PoliceCap" @change="changeAttr($event)" v-model="checkbox.PoliceCap" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PoliceCap" class="form-check-label chLabel">Police Cap ({{ filter_data.punk_Attribute["PoliceCap"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleEyeShadow" @change="changeAttr($event)" v-model="checkbox.PurpleEyeShadow" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleEyeShadow" class="form-check-label chLabel">Purple Eye Shadow ({{ filter_data.punk_Attribute["PurpleEyeShadow"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleHair" @change="changeAttr($event)" v-model="checkbox.PurpleHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleHair" class="form-check-label chLabel">Purple Hair ({{ filter_data.punk_Attribute["PurpleHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleLipstick" @change="changeAttr($event)" v-model="checkbox.PurpleLipstick" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleLipstick" class="form-check-label chLabel">Purple Lipstick ({{ filter_data.punk_Attribute["PurpleLipstick"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RedMohawk" @change="changeAttr($event)" v-model="checkbox.RedMohawk" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RedMohawk" class="form-check-label chLabel">Red Mohawk ({{ filter_data.punk_Attribute["RedMohawk"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RegularShades" @change="changeAttr($event)" v-model="checkbox.RegularShades" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RegularShades" class="form-check-label chLabel">Regular Shades ({{ filter_data.punk_Attribute["RegularShades"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RosyCheeks" @change="changeAttr($event)" v-model="checkbox.RosyCheeks" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RosyCheeks" class="form-check-label chLabel">Rosy Cheeks ({{ filter_data.punk_Attribute["RosyCheeks"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ShadowBeard" @change="changeAttr($event)" v-model="checkbox.ShadowBeard" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ShadowBeard" class="form-check-label chLabel">Shadow Beard ({{ filter_data.punk_Attribute["ShadowBeard"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ShavedHead" @change="changeAttr($event)" v-model="checkbox.ShavedHead" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ShavedHead" class="form-check-label chLabel">Shaved Head ({{ filter_data.punk_Attribute["ShavedHead"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_SilverChain" @change="changeAttr($event)" v-model="checkbox.SilverChain" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_SilverChain" class="form-check-label chLabel">Silver Chain ({{ filter_data.punk_Attribute["SilverChain"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_SmallShades" @change="changeAttr($event)" v-model="checkbox.SmallShades" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_SmallShades" class="form-check-label chLabel">Small Shades ({{ filter_data.punk_Attribute["SmallShades"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Smile" @change="changeAttr($event)" v-model="checkbox.Smile" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Smile" class="form-check-label chLabel">Smile ({{ filter_data.punk_Attribute["Smile"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Spots" @change="changeAttr($event)" v-model="checkbox.Spots" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Spots" class="form-check-label chLabel">Spots ({{ filter_data.punk_Attribute["Spots"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHair" @change="changeAttr($event)" v-model="checkbox.StraightHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHair" class="form-check-label chLabel">Straight Hair ({{ filter_data.punk_Attribute["StraightHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHairBlonde" @change="changeAttr($event)" v-model="checkbox.StraightHairBlonde" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHairBlonde" class="form-check-label chLabel">Straight Hair Blonde ({{ filter_data.punk_Attribute["StraightHairBlonde"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHairDark" @change="changeAttr($event)" v-model="checkbox.StraightHairDark" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHairDark" class="form-check-label chLabel">Straight Hair Dark ({{ filter_data.punk_Attribute["StraightHairDark"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StringyHair" @change="changeAttr($event)" v-model="checkbox.StringyHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StringyHair" class="form-check-label chLabel">Stringy Hair ({{ filter_data.punk_Attribute["StringyHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_TassleHat" @change="changeAttr($event)" v-model="checkbox.TassleHat" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_TassleHat" class="form-check-label chLabel">Tassle Hat ({{ filter_data.punk_Attribute["TassleHat"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Tiara" @change="changeAttr($event)" v-model="checkbox.Tiara" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Tiara" class="form-check-label chLabel">Tiara ({{ filter_data.punk_Attribute["Tiara"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_TopHat" @change="changeAttr($event)" v-model="checkbox.TopHat" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_TopHat" class="form-check-label chLabel">Top Hat ({{ filter_data.punk_Attribute["TopHat"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_VR" @change="changeAttr($event)" v-model="checkbox.VR" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_VR" class="form-check-label chLabel">VR ({{ filter_data.punk_Attribute["VR"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_VampireHair" @change="changeAttr($event)" v-model="checkbox.VampireHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_VampireHair" class="form-check-label chLabel">Vampire Hair ({{ filter_data.punk_Attribute["VampireHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Vape" @change="changeAttr($event)" v-model="checkbox.Vape" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Vape" class="form-check-label chLabel">Vape ({{ filter_data.punk_Attribute["Vape"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WeldingGoggles" @change="changeAttr($event)" v-model="checkbox.WeldingGoggles" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WeldingGoggles" class="form-check-label chLabel">Welding Goggles ({{ filter_data.punk_Attribute["WeldingGoggles"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildBlonde" @change="changeAttr($event)" v-model="checkbox.WildBlonde" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildBlonde" class="form-check-label chLabel">Wild Blonde ({{ filter_data.punk_Attribute["WildBlonde"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildHair" @change="changeAttr($event)" v-model="checkbox.WildHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildHair" class="form-check-label chLabel">Wild Hair ({{ filter_data.punk_Attribute["WildHair"] || 0 }})</label> </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildWhiteHair" @change="changeAttr($event)" v-model="checkbox.WildWhiteHair" type="checkbox"><span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildWhiteHair" class="form-check-label chLabel">Wild White Hair ({{ filter_data.punk_Attribute["WildWhiteHair"] || 0 }})</label> </div>
                    </div>
                </div>
            </div>
    
            <!--          <div id="sidebarBtn" >-->
    
            <!--              <div class="row" >-->
            <!--                  <button aria-controls="example-collapse-text" aria-expanded="false" type="button" class="btn btn-outline-dark btn-block" style="margin-bottom: 5px;">-->
            <!--                      Clear Filter-->
            <!--                  </button>-->
            <!--                  <button @click="closeSidebar" aria-controls="example-collapse-text" aria-expanded="false" type="button" class="btn btn-outline-dark btn-block" style="margin-bottom: 5px;">-->
            <!--                      Done-->
            <!--                  </button>-->
            <!--              </div>-->
            <!--          </div>-->
    
        </div>
        <div id="sidebarCover" @click="closeSidebar" class="hideCover"></div>
        <div>
            <div class="col-lg-12">
                <div class="col-12">
                    <form class="row form-group">
                        <div class="form-group col-6">
                            <input @keyup="searchByInputId" placeholder="Search by Id" v-model="searchById" type="number" class="form-control">
                        </div>
                        <button @click="changeFilterShow" aria-controls="example-collapse-text" aria-expanded="false" style="margin-bottom: 5px;" type="button" class="btn btn-primary btn-block col-6 form-control">
                            <img src="/img/cp_button_filter.png" />
                            <i class="fa fa-spinner" ></i>
                            Filter
                        </button>
                        <!-- <div class="form-group">
                            <br />
                            <p style="margin-bottom: 0">Minimum price :
                                <span>{{ minimum_price }}</span>
                                <span v-if="minimum_price > 0">k</span> BNB
                            </p>
                            <input @change="changeRange" style="width: 100%" type="range" class="form-range" value="0" min="0" max="100" step="1" id="customRange3" v-model="minimum_price">
                        </div> -->
                        <!-- <div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="only_have_bid" v-model="only_have_bid" @change="changeOnlyHaveBid($event)" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="only_have_bid" class="form-check-label chLabel">Only Have Bid</label>
                            </div>
                        </div> -->
                    </form>
                </div>
            </div>
            <div class="col">
                <div class="">
                    <div class="">
                        <div v-if="!this.walletStatus" class="row">
                            <!-- <div v-if="this.walletStatus==false" style="margin: 0 auto;">
                                <button type="button" class="btn">
                                        <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button>
                            </div> -->
                            <div class="text-center" style="margin: 0 auto;">
                                <h1> Connect your Metamask </h1>
                                <div class="text-center" style="margin-bottom: 20px;">
                                </div>
                                <button @click="walletManager.connectToMetamask()" type="button" class="btn crosspunk-btn">
                                        Connect Wallet
                                    </button>
                                <!-- <button v-else type="button" class="btn crosspunk-btn">
                                        Connect Wallet
                                        <div class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button> -->
                            </div>
    
                        </div>
                        <div v-else-if="punk_loading" class="row">
                            <button type="button" class="btn" style="margin: 0 auto;">
                                        <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button>
                        </div>
                        <div v-else-if="punks.length > 0" class="row">
                            <div v-for="(punk) in punks" v-bind:key="punk.idx" style="margin-bottom: 10px;" class="col" @click="showDetail(punk.idx)">
                                <div style="height: 100%; max-width: 300px; min-width: 210px; margin: 0 auto;" class="card">
                                    <img v-if="crypto_Punks.indexOf(punk.idx) > -1" class="card-img-top pixelated" :src="(`/crypto/${punk.idx}.png`)">
                                    <img v-else class="card-img-top pixelated" :src="(`/crosspunks/punk${punk.idx}.png`)">
                                    <div class="card-body">
                                        <div class="stretched-link card-title h5">CrossPunk {{ punk.idx }}</div>
                                        <div>
                                            <div class="text-muted card-subtitle h6">
                                                {{ punk.type == 'Crypto' ? 'Crypto Friend' : punk.type }}
                                                <span style="float: right">
                                                    {{ walletManager.web3Global.utils.fromWei(punk.bid.minValue.hex ? punk.bid.minValue.hex : punk.bid.minValue) }}
                                                    <img style="margin-left: 5px;" height="20px" src="/bnb.svg">
                                                </span>
                                                <div class="clearfix"></div>
                                                <!-- <span v-if="punk.real_bid && punk.real_bid.hasBid" style="float: right; margin-top: 5px;">
                                                    {{ walletManager.web3Global.utils.fromWei(punk.real_bid.value.hex ? punk.real_bid.value.hex : punk.real_bid.value) }}
                                                    <img height="20px;" src="/auction-bid.svg" />
                                                </span> -->
                                            </div>
                                            <p class="card-text">
                                                Rank : {{ punk.rank }}
                                            </p>
                                            <p class="card-text">
                                                <span v-for="(tag, index) in punk.attributes" v-bind:key="index" style="margin-right: 4px;" class="badge badge-primary">{{ tag }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="myAllPunks.length == 0" class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-4 card">
                                <div class="card-body">
                                    <p class="card-title">There is not any CrossPunk for sale!</p>
                                </div>
                            </div>
                            <div class="col-md-4"></div>
                        </div>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ForSale",
    data() {
        return {
            walletStatus: false,
            punk_loading: true,
            is_load_my_punk: false,
            punks: [],
            crypto_Punks: [3442, 910, 846, 794, 377, 373, 300, 224, 220, 81, 57],
            minimum_price: 0,
            searchById: '',
            allPunks: [],
            myAllPunks: [],
            showFilter: false,
            checkbox: {
                all: true
            },
            types: {
                all: true
            },
            attr_count: {
                all: true
            },
            last_add: false,
            filter_data: {
                attribute_count: {},
                punk_type: {},
                punk_Attribute: {}
            },
            changeRangeTime: null,
            sortBy: {
                // token_id_lowest : true
                price_lowest: true
            },
            only_have_bid: false,
            price_idx: {},
            price_bid_idx: {},
            filter_time_out: null,
        }
    },
    mounted() {
        setInterval(() => {
            this.walletStatus = this.walletManager.walletStatus;
            if (this.walletStatus && !this.is_load_my_punk) {
                this.is_load_my_punk = true;
                this.getMyPunks();
            } else if (!this.walletStatus) {
                this.walletManager.connectToMetamask();
            }
        }, 100);
    },
    created() {
        window.onscroll = () => {
            if (document.documentElement.scrollTop + window.innerHeight + 400 > document.documentElement.offsetHeight) {
                this.addPunks();
            }
        }
    },
    methods: {
        showDetail(index) {
            this.$router.push({ name: "details", params: { id: index } });
        },
        async getMyPunks() {
            if (!this.walletManager.nft.methods.ownerOf) {
                this.is_load_my_punk = false;
            } else {
                this.punk_loading = true;

                try {
                    let loadFromServer = false;
                    try {
                        let dataServer = await this.$http.get(`https://crosspunks.com/server/forSale`)
                        let rows = JSON.parse(dataServer.data.msg);
                        if (rows.length > 0) {
                            loadFromServer = true;
                            // don't show onlySellTo items in forSale tab
                            rows = rows.filter((item) => !Array.isArray(item) && item.bid.onlySellTo == '410000000000000000000000000000000000000000')
                            for (let rowId in rows) {
                                let p = window.punks[rows[rowId].idx];
                                p.bid = rows[rowId].bid;
                                p.real_bid = rows[rowId].real_bid;
                                this.myAllPunks.push(p);
                            }
                        }
                    } catch (e) {
                        console.log("can not read from server");
                    }

                    if (!loadFromServer) {
                        let mybalance = await this.walletManager.nft.methods.balanceOf(this.walletManager.dexAddr).call();

                        this.myAllPunks = [];

                        for (let i = 0; i < mybalance; i++) {
                            let number = await this.walletManager.nft.methods.tokenOfOwnerByIndex(this.walletManager.dexAddr, i).call();
                            let p = window.punks[(number)];
                            p.bid = await this.walletManager.dex.methods.punksOfferedForSale(number).call();
                            this.myAllPunks.push(p);
                        }
                    }

                    // for(let i=0; i<100; i++){
                    //     this.myAllPunks.push(window.punks[i]);
                    // }


                    // console.log(res);
                    // this.punks = [];
                    // for (let w = 0; w < res.data.msg.length; w++) {
                    //     for (let i = 0; i < 10000; i++) {
                    //         if (res.data.msg[w].p_index == i) {
                    //             this.punks.push(window.punks[i]);
                    //         }
                    //     }
                    // }

                    setTimeout(() => {
                        this.filterAttr();
                        this.setFilterDetails();
                    }, 100);

                } catch (e) {
                    console.log(e.message);
                }

                this.punk_loading = false;
            }
        },
        setFilterDetails() {
            this.filter_data.punk_Attribute = {};
            let attr = {};
            this.filter_data.punk_type = {};
            this.filter_data.attribute_count = {};

            for (let i = 0; i < this.myAllPunks.length; i++) {
                let _t = this.myAllPunks[i].type;
                if (!this.filter_data.punk_type[_t])
                    this.filter_data.punk_type[_t] = 0;

                this.filter_data.punk_type[_t]++;

                if (!this.filter_data.attribute_count[this.myAllPunks[i].attributes.length])
                    this.filter_data.attribute_count[this.myAllPunks[i].attributes.length] = 0;

                this.filter_data.attribute_count[this.myAllPunks[i].attributes.length]++;

                for (let key in this.myAllPunks[i].attributes) {
                    let _key = this.myAllPunks[i].attributes[key];
                    _key = _key.replace('"', '');

                    if (!attr[_key])
                        attr[_key] = 0;

                    attr[_key]++;
                }
            }

            attr = Object.keys(attr).sort().reduce(
                (obj, key) => {
                    obj[key] = attr[key];
                    return obj;
                }, {}
            );

            for (let a in attr) {
                let key = a.replace(/\s/g, '');
                key = key.replace(/\d/g, '');
                key = key.replace(/-/g, '');

                this.filter_data.punk_Attribute[key] = attr[a];
            }
        },
        addPunks() {
            if (!this.last_add) {
                this.last_add = setTimeout(() => {

                    let l = this.punks.length;

                    for (let i = l; i < l + 60 && i < this.allPunks.length; i++) {
                        this.punks.push(this.allPunks[i]);
                        // console.log(i);
                    }

                    clearTimeout(this.last_add);
                    this.last_add = false;
                }, 500);
            }
        },
        searchByInputId() {
            this.punks = [];
            if (this.searchById.trim()) {
                for (let i = 0; i < this.allPunks.length; i++) {
                    if (this.searchById.trim() > -1 && this.searchById.trim() == this.allPunks[i].idx) {
                        this.punks.push(this.allPunks[i]);
                    }
                }
            } else {
                this.filterAttr();
            }
        },
        changeType(e) {
            this.searchById = '';

            if (e.target.getAttribute('data-id') == "all" && this.types.all) {
                for (let ch in this.types) {
                    if (ch == "all")
                        continue;
                    this.types[ch] = false;
                }
            } else {
                this.types.all = '';
            }

            setTimeout(() => {
                this.filterAttr();
            }, 200);
        },
        changeAttrCount(e) {
            this.searchById = '';

            if (e.target.getAttribute('data-id') == "all" && this.attr_count.all) {
                for (let ch in this.attr_count) {
                    if (ch == "all")
                        continue;
                    this.attr_count[ch] = false;
                }
            } else {
                this.attr_count.all = '';
            }

            setTimeout(() => {
                this.filterAttr();
            }, 200);
        },
        changeAttr(e) {
            this.searchById = '';

            if (e.target.getAttribute('data-id') == "all" && this.checkbox.all) {
                for (let ch in this.checkbox) {
                    if (ch == "all")
                        continue;
                    this.checkbox[ch] = false;
                }
            } else {
                this.checkbox.all = '';
            }

            setTimeout(() => {
                this.filterAttr();
            }, 200);
        },
        changeSortBy(e) {
            this.searchById = '';

            for (let ch in this.sortBy) {
                this.sortBy[ch] = (e.target.getAttribute('data-id') == ch);
            }

            setTimeout(() => {
                this.filterAttr();
            }, 200);
        },
        changeOnlyHaveBid() {
            this.searchById = '';
            setTimeout(() => {
                this.filterAttr();
            }, 200);
        },
        filterAttr() {
            this.punk_loading = true;

            if (this.filter_time_out)
                clearTimeout(this.filter_time_out);

            this.filter_time_out = setTimeout(() => {

                let active_attr_count = "all";
                let _allPunksCount = [];

                if (!this.attr_count.all) {
                    active_attr_count = [];
                    for (let ch in this.attr_count) {
                        if (ch == "all")
                            continue;

                        if (this.attr_count[ch])
                            active_attr_count.push(ch);
                    }
                }


                if (active_attr_count == "all") {
                    _allPunksCount = this.myAllPunks;
                } else {
                    for (let i = 0; i < this.myAllPunks.length; i++) {
                        if (active_attr_count.indexOf(this.myAllPunks[i].attributes.length + "") > -1)
                            _allPunksCount.push(this.myAllPunks[i]);

                    }
                }

                let activeAttr = "all";
                let _allPunks = [];
                if (!this.checkbox.all) {
                    activeAttr = [];
                    for (let ch in this.checkbox) {
                        if (ch == "all")
                            continue;

                        if (this.checkbox[ch])
                            activeAttr.push(ch);
                    }
                }

                if (activeAttr == "all") {
                    _allPunks = _allPunksCount;
                } else {
                    for (let i = 0; i < _allPunksCount.length; i++) {
                        let exists = false;


                        for (let w = 0; w < _allPunksCount[i].attributes.length; w++) {

                            let key = (_allPunksCount[i].attributes[w]).replace(/\s/g, '');
                            key = key.replace(/\d/g, '');
                            key = key.replace(/-/g, '');

                            if (activeAttr.indexOf(key) > -1) {
                                exists = true;
                            }
                        }
                        if (exists)
                            _allPunks.push(_allPunksCount[i]);

                    }
                }

                // filter price
                let _allPunksPrice = [];
                for (let i = 0; i < _allPunks.length; i++) {
                    // TODO
                    if (
                        new this.walletManager.web3Global.utils.BN(_allPunks[i].bid.minValue.hex ? _allPunks[i].bid.minValue.hex : _allPunks[i].bid.minValue)
                        .gte(new this.walletManager.web3Global.utils.BN(parseInt(this.minimum_price) * 1000000000))
                    )
                        _allPunksPrice.push(_allPunks[i]);
                }
                _allPunks = _allPunksPrice;

                let activeType = "all";
                this.allPunks = [];
                if (!this.types.all) {
                    activeType = [];
                    for (let ch in this.types) {
                        if (ch == "all")
                            continue;

                        if (this.types[ch])
                            activeType.push(ch);
                    }
                }

                let _allActive = [];
                if (activeType == "all") {
                    _allActive = _allPunks;
                } else {
                    for (let i = 0; i < _allPunks.length; i++) {
                        if (activeType.indexOf(_allPunks[i].type) > -1) {
                            _allActive.push(_allPunks[i]);
                        }
                    }
                }

                let sortBy = false;
                for (let s in this.sortBy) {
                    if (this.sortBy[s])
                        sortBy = s;
                }

                if (this.only_have_bid || (sortBy == "bid_lowest" || sortBy == "bid_highest")) {
                    for (let i = 0; i < _allActive.length; i++) {
                        if (_allActive[i].real_bid && _allActive[i].real_bid.hasBid) {
                            this.allPunks.push(_allActive[i]);
                        }
                    }
                } else {
                    this.allPunks = _allActive;
                }

                if (sortBy) {
                    this.allPunks.sort((a, b) => {
                        if (sortBy === "token_id_lowest") {
                            return a.idx - b.idx;
                        } else if (sortBy === "token_id_highest") {
                            return b.idx - a.idx;
                        } else if (sortBy === "rank_lowest") {
                            return a.rank - b.rank;
                        } else if (sortBy === "rank_highest") {
                            return b.rank - a.rank;
                        } else if (sortBy === "price_lowest") {
                            if (!this.price_idx[a.idx])
                                this.price_idx[a.idx] = this.walletManager.web3Global.utils.fromWei(a.bid.minValue.hex ? a.bid.minValue.hex : a.bid.minValue);

                            let first = this.price_idx[a.idx];

                            if (!this.price_idx[b.idx])
                                this.price_idx[b.idx] = this.walletManager.web3Global.utils.fromWei(b.bid.minValue.hex ? b.bid.minValue.hex : b.bid.minValue);

                            let second = this.price_idx[b.idx];

                            return (first - second);
                        } else if (sortBy === "price_highest") {
                            if (!this.price_idx[a.idx])
                                this.price_idx[a.idx] = this.walletManager.web3Global.utils.fromWei(a.bid.minValue.hex ? a.bid.minValue.hex : a.bid.minValue);

                            let first = this.price_idx[a.idx];

                            if (!this.price_idx[b.idx])
                                this.price_idx[b.idx] = this.walletManager.web3Global.utils.fromWei(b.bid.minValue.hex ? b.bid.minValue.hex : b.bid.minValue);

                            let second = this.price_idx[b.idx];

                            return (second - first);
                        } else if (sortBy === "bid_lowest") {
                            if (!this.price_bid_idx[a.idx])
                                this.price_bid_idx[a.idx] = this.walletManager.web3Global.utils.fromWei(a.real_bid.value.hex ? a.real_bid.value.hex : a.real_bid.value);

                            let first = this.price_bid_idx[a.idx];

                            if (!this.price_bid_idx[b.idx])
                                this.price_bid_idx[b.idx] = this.walletManager.web3Global.utils.fromWei(b.real_bid.value.hex ? b.real_bid.value.hex : b.real_bid.value);

                            let second = this.price_bid_idx[b.idx];

                            return (first - second);
                        } else if (sortBy === "bid_highest") {
                            if (!this.price_bid_idx[a.idx])
                                this.price_bid_idx[a.idx] = this.walletManager.web3Global.utils.fromWei(a.real_bid.value.hex ? a.real_bid.value.hex : a.real_bid.value);

                            let first = this.price_bid_idx[a.idx];

                            if (!this.price_bid_idx[b.idx])
                                this.price_bid_idx[b.idx] = this.walletManager.web3Global.utils.fromWei(b.real_bid.value.hex ? b.real_bid.value.hex : b.real_bid.value);

                            let second = this.price_bid_idx[b.idx];

                            return (second - first);
                        }
                    })
                }

                this.punks = [];

                for (let i = 0; i < 60 && i < this.allPunks.length; i++) {
                    this.punks.push(this.allPunks[i]);
                }

                this.punk_loading = false;
            }, 100);
        },
        changeFilterShow() {
            document.getElementById("mySidebar").style.left = "0px";
            document.getElementById("sidebarCover").classList.remove('hideCover')
        },
        closeSidebar() {
            document.getElementById("mySidebar").style.left = "-320px";
            document.getElementById("sidebarCover").classList.add('hideCover')
        },
        changeRange() {
            if (this.changeRangeTime)
                clearTimeout(this.changeRangeTime);

            this.changeRangeTime = setTimeout(() => {
                this.filterAttr();
            }, 1000);
        }
    },
};
</script>

<style scoped>
.form-group.form-check-inline {
    display: block;
}

/* The sidebar menu */

.sidebar {
    height: 100%;
    /* 100% Full-height */
    width: 300px;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Stay on top */
    top: 0;
    left: -320px;
    background-color: #fdfdfe;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */

.sidebar a:hover {
    color: #f1f1f1;
}

/* Position and style the close button (top right corner) */

.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

/* The button used to open the sidebar */

.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
}

.openbtn:hover {
    background-color: #444;
}

#mySidebar {
    z-index: 999;
}

#sidebarCover {
    position: fixed;
    background-color: rgba(82, 68, 68, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
}

.hideCover {
    display: none;
}

.sidebarWrapper {
    padding-left: 20px;
    margin-bottom: 100px;
}

.sidebarHeader {
    font-size: 23px;
    font-weight: bold;
}

.chContainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */

.chContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 25px;
    width: 25px;
    left: 0;
    z-index: 9999;
}

/* Create a custom checkbox */

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #fbfcfd;
    border-radius: 3px;
    border: 1px solid #7f7f7f;
}

/* On mouse-over, add a grey background color */

.chContainer:hover input~.checkmark {
    background-color: #d9d8e8;
}

/* When the checkbox is checked, add a blue background */

.chContainer input:checked~.checkmark {
    background-color: #d9d8e8;
}

/* Create the checkmark/indicator (hidden when not checked) */

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */

.chContainer input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */

.chContainer .checkmark:after {
    left: 8px;
    top: 1px;
    width: 6px;
    height: 16px;
    border: solid #3d3d3d;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.chLabel {
    position: relative;
    left: 28px;
    color: #888888;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */

@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }
    .sidebar a {
        font-size: 18px;
    }
}

#sidebarBtn {
    position: fixed;
    height: 50px;
    bottom: 10px;
    left: 30px;
    width: 260px;
    background-color: #fff
}

#sidebarBtn button {
    font-size: 15px;
    width: 40%;
    margin-top: 0;
    margin-left: 5%;
}

/*#sidebarBtn > div > div > div{*/

/*    display: flex;*/

/*}*/
</style>
