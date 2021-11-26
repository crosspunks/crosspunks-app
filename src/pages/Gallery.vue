<template>
    <div class="container-fluid">
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
                                <label for="filter_attr_count_0" class="form-check-label chLabel">0 (8)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_1" @change="changeAttrCount($event)" v-model="attr_count['1']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_1" class="form-check-label chLabel">1 (343)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_2" @change="changeAttrCount($event)" v-model="attr_count['2']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_2" class="form-check-label chLabel">2 (3554)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_3" @change="changeAttrCount($event)" v-model="attr_count['3']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_3" class="form-check-label chLabel">3 (4499)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_4" @change="changeAttrCount($event)" v-model="attr_count['4']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_4" class="form-check-label chLabel">4 (1419)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_5" @change="changeAttrCount($event)" v-model="attr_count['5']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_5" class="form-check-label chLabel">5 (165)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_6" @change="changeAttrCount($event)" v-model="attr_count['6']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_6" class="form-check-label chLabel">6 (11)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_attr_count_7" @change="changeAttrCount($event)" v-model="attr_count['7']" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_attr_count_7" class="form-check-label chLabel">7 (1)</label>
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
                                <label for="filter_id_type_Female" class="form-check-label chLabel">Female (3839)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Male" @change="changeType($event)" v-model="types.Male" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Male" class="form-check-label chLabel">Male (6029)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Crypto" @change="changeType($event)" v-model="types.Crypto" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Crypto" class="form-check-label chLabel">Crypto Friend (11)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Zombie" @change="changeType($event)" v-model="types.Zombie" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Zombie" class="form-check-label chLabel">Zombie (88)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Ape" @change="changeType($event)" v-model="types.Ape" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Ape" class="form-check-label chLabel">Ape (24)</label>
                            </div>
                            <div class="form-group form-check-inline">
                                <div class="chContainer">
                                    <input id="filter_id_type_Alien" @change="changeType($event)" v-model="types.Alien" type="checkbox">
                                    <span class="checkmark"></span>
                                </div>
                                <label for="filter_id_type_Alien" class="form-check-label chLabel">Alien (9)</label>
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
                                <input id="filter_id_attr_DGlasses" @change="changeAttr($event)" v-model="checkbox.DGlasses" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_DGlasses" class="form-check-label chLabel">3D Glasses (287)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Bandana" @change="changeAttr($event)" v-model="checkbox.Bandana" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Bandana" class="form-check-label chLabel">Bandana (481)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Beanie" @change="changeAttr($event)" v-model="checkbox.Beanie" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Beanie" class="form-check-label chLabel">Beanie (44)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BigBeard" @change="changeAttr($event)" v-model="checkbox.BigBeard" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BigBeard" class="form-check-label chLabel">Big Beard (146)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BigShades" @change="changeAttr($event)" v-model="checkbox.BigShades" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BigShades" class="form-check-label chLabel">Big Shades (534)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlackLipstick" @change="changeAttr($event)" v-model="checkbox.BlackLipstick" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlackLipstick" class="form-check-label chLabel">Black Lipstick (617)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlondeBob" @change="changeAttr($event)" v-model="checkbox.BlondeBob" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlondeBob" class="form-check-label chLabel">Blonde Bob (147)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlondeShort" @change="changeAttr($event)" v-model="checkbox.BlondeShort" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlondeShort" class="form-check-label chLabel">Blonde Short (129)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BlueEyeShadow" @change="changeAttr($event)" v-model="checkbox.BlueEyeShadow" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BlueEyeShadow" class="form-check-label chLabel">Blue Eye Shadow (266)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_BuckTeeth" @change="changeAttr($event)" v-model="checkbox.BuckTeeth" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_BuckTeeth" class="form-check-label chLabel">Buck Teeth (78)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Cap" @change="changeAttr($event)" v-model="checkbox.Cap" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Cap" class="form-check-label chLabel">Cap (350)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CapForward" @change="changeAttr($event)" v-model="checkbox.CapForward" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CapForward" class="form-check-label chLabel">Cap Forward (254)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Chinstrap" @change="changeAttr($event)" v-model="checkbox.Chinstrap" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Chinstrap" class="form-check-label chLabel">Chinstrap (281)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Choker" @change="changeAttr($event)" v-model="checkbox.Choker" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Choker" class="form-check-label chLabel">Choker (48)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Cigarette" @change="changeAttr($event)" v-model="checkbox.Cigarette" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Cigarette" class="form-check-label chLabel">Cigarette (959)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClassicShades" @change="changeAttr($event)" v-model="checkbox.ClassicShades" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClassicShades" class="form-check-label chLabel">Classic Shades (502)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownEyesBlue" @change="changeAttr($event)" v-model="checkbox.ClownEyesBlue" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownEyesBlue" class="form-check-label chLabel">Clown Eyes Blue (384)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownEyesGreen" @change="changeAttr($event)" v-model="checkbox.ClownEyesGreen" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownEyesGreen" class="form-check-label chLabel">Clown Eyes Green (382)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownHairGreen" @change="changeAttr($event)" v-model="checkbox.ClownHairGreen" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownHairGreen" class="form-check-label chLabel">Clown Hair Green (148)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ClownNose" @change="changeAttr($event)" v-model="checkbox.ClownNose" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ClownNose" class="form-check-label chLabel">Clown Nose (211)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CowboyHat" @change="changeAttr($event)" v-model="checkbox.CowboyHat" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CowboyHat" class="form-check-label chLabel">Cowboy Hat (142)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_CrazyHair" @change="changeAttr($event)" v-model="checkbox.CrazyHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_CrazyHair" class="form-check-label chLabel">Crazy Hair (414)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_DarkHair" @change="changeAttr($event)" v-model="checkbox.DarkHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_DarkHair" class="form-check-label chLabel">Dark Hair (157)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Dorag" @change="changeAttr($event)" v-model="checkbox.Dorag" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Dorag" class="form-check-label chLabel">Do-rag (300)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Earring" @change="changeAttr($event)" v-model="checkbox.Earring" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Earring" class="form-check-label chLabel">Earring (2453)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_EyeMask" @change="changeAttr($event)" v-model="checkbox.EyeMask" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_EyeMask" class="form-check-label chLabel">Eye Mask (293)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_EyePatch" @change="changeAttr($event)" v-model="checkbox.EyePatch" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_EyePatch" class="form-check-label chLabel">Eye Patch (461)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Fedora" @change="changeAttr($event)" v-model="checkbox.Fedora" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Fedora" class="form-check-label chLabel">Fedora (186)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrontBeard" @change="changeAttr($event)" v-model="checkbox.FrontBeard" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrontBeard" class="form-check-label chLabel">Front Beard (273)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrontBeardDark" @change="changeAttr($event)" v-model="checkbox.FrontBeardDark" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrontBeardDark" class="form-check-label chLabel">Front Beard Dark (260)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Frown" @change="changeAttr($event)" v-model="checkbox.Frown" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Frown" class="form-check-label chLabel">Frown (261)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_FrumpyHair" @change="changeAttr($event)" v-model="checkbox.FrumpyHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_FrumpyHair" class="form-check-label chLabel">Frumpy Hair (442)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Goat" @change="changeAttr($event)" v-model="checkbox.Goat" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Goat" class="form-check-label chLabel">Goat (294)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_GoldChain" @change="changeAttr($event)" v-model="checkbox.GoldChain" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_GoldChain" class="form-check-label chLabel">Gold Chain (169)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_GreenEyeShadow" @change="changeAttr($event)" v-model="checkbox.GreenEyeShadow" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_GreenEyeShadow" class="form-check-label chLabel">Green Eye Shadow (271)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HalfShaved" @change="changeAttr($event)" v-model="checkbox.HalfShaved" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HalfShaved" class="form-check-label chLabel">Half Shaved (147)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Handlebars" @change="changeAttr($event)" v-model="checkbox.Handlebars" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Handlebars" class="form-check-label chLabel">Handlebars (263)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Headband" @change="changeAttr($event)" v-model="checkbox.Headband" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Headband" class="form-check-label chLabel">Headband (396)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Hoodie" @change="changeAttr($event)" v-model="checkbox.Hoodie" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Hoodie" class="form-check-label chLabel">Hoodie (259)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HornedRimGlasses" @change="changeAttr($event)" v-model="checkbox.HornedRimGlasses" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HornedRimGlasses" class="form-check-label chLabel">Horned Rim Glasses (535)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_HotLipstick" @change="changeAttr($event)" v-model="checkbox.HotLipstick" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_HotLipstick" class="form-check-label chLabel">Hot Lipstick (696)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_KnittedCap" @change="changeAttr($event)" v-model="checkbox.KnittedCap" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_KnittedCap" class="form-check-label chLabel">Knitted Cap (419)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_LuxuriousBeard" @change="changeAttr($event)" v-model="checkbox.LuxuriousBeard" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_LuxuriousBeard" class="form-check-label chLabel">Luxurious Beard (286)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MedicalMask" @change="changeAttr($event)" v-model="checkbox.MedicalMask" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MedicalMask" class="form-check-label chLabel">Medical Mask (175)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MessyHair" @change="changeAttr($event)" v-model="checkbox.MessyHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MessyHair" class="form-check-label chLabel">Messy Hair (460)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mohawk" @change="changeAttr($event)" v-model="checkbox.Mohawk" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mohawk" class="form-check-label chLabel">Mohawk (441)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MohawkDark" @change="changeAttr($event)" v-model="checkbox.MohawkDark" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MohawkDark" class="form-check-label chLabel">Mohawk Dark (429)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_MohawkThin" @change="changeAttr($event)" v-model="checkbox.MohawkThin" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_MohawkThin" class="form-check-label chLabel">Mohawk Thin (441)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mole" @change="changeAttr($event)" v-model="checkbox.Mole" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mole" class="form-check-label chLabel">Mole (644)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Mustache" @change="changeAttr($event)" v-model="checkbox.Mustache" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Mustache" class="form-check-label chLabel">Mustache (288)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Muttonchops" @change="changeAttr($event)" v-model="checkbox.Muttonchops" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Muttonchops" class="form-check-label chLabel">Muttonchops (303)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NerdGlasses" @change="changeAttr($event)" v-model="checkbox.NerdGlasses" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NerdGlasses" class="form-check-label chLabel">Nerd Glasses (571)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NormalBeard" @change="changeAttr($event)" v-model="checkbox.NormalBeard" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NormalBeard" class="form-check-label chLabel">Normal Beard (291)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_NormalBeardBlack" @change="changeAttr($event)" v-model="checkbox.NormalBeardBlack" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_NormalBeardBlack" class="form-check-label chLabel">Normal Beard Black (289)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_OrangeSide" @change="changeAttr($event)" v-model="checkbox.OrangeSide" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_OrangeSide" class="form-check-label chLabel">Orange Side (68)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PeakSpike" @change="changeAttr($event)" v-model="checkbox.PeakSpike" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PeakSpike" class="form-check-label chLabel">Peak Spike (303)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Pigtails" @change="changeAttr($event)" v-model="checkbox.Pigtails" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Pigtails" class="form-check-label chLabel">Pigtails (94)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PilotHelmet" @change="changeAttr($event)" v-model="checkbox.PilotHelmet" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PilotHelmet" class="form-check-label chLabel">Pilot Helmet (54)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PinkWithHat" @change="changeAttr($event)" v-model="checkbox.PinkWithHat" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PinkWithHat" class="form-check-label chLabel">Pink With Hat (95)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Pipe" @change="changeAttr($event)" v-model="checkbox.Pipe" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Pipe" class="form-check-label chLabel">Pipe (317)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PoliceCap" @change="changeAttr($event)" v-model="checkbox.PoliceCap" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PoliceCap" class="form-check-label chLabel">Police Cap (203)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleEyeShadow" @change="changeAttr($event)" v-model="checkbox.PurpleEyeShadow" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleEyeShadow" class="form-check-label chLabel">Purple Eye Shadow (262)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleHair" @change="changeAttr($event)" v-model="checkbox.PurpleHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleHair" class="form-check-label chLabel">Purple Hair (165)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_PurpleLipstick" @change="changeAttr($event)" v-model="checkbox.PurpleLipstick" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_PurpleLipstick" class="form-check-label chLabel">Purple Lipstick (655)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RedMohawk" @change="changeAttr($event)" v-model="checkbox.RedMohawk" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RedMohawk" class="form-check-label chLabel">Red Mohawk (147)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RegularShades" @change="changeAttr($event)" v-model="checkbox.RegularShades" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RegularShades" class="form-check-label chLabel">Regular Shades (526)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_RosyCheeks" @change="changeAttr($event)" v-model="checkbox.RosyCheeks" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_RosyCheeks" class="form-check-label chLabel">Rosy Cheeks (128)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ShadowBeard" @change="changeAttr($event)" v-model="checkbox.ShadowBeard" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ShadowBeard" class="form-check-label chLabel">Shadow Beard (526)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_ShavedHead" @change="changeAttr($event)" v-model="checkbox.ShavedHead" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_ShavedHead" class="form-check-label chLabel">Shaved Head (300)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_SilverChain" @change="changeAttr($event)" v-model="checkbox.SilverChain" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_SilverChain" class="form-check-label chLabel">Silver Chain (156)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_SmallShades" @change="changeAttr($event)" v-model="checkbox.SmallShades" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_SmallShades" class="form-check-label chLabel">Small Shades (376)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Smile" @change="changeAttr($event)" v-model="checkbox.Smile" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Smile" class="form-check-label chLabel">Smile (239)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Spots" @change="changeAttr($event)" v-model="checkbox.Spots" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Spots" class="form-check-label chLabel">Spots (124)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHair" @change="changeAttr($event)" v-model="checkbox.StraightHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHair" class="form-check-label chLabel">Straight Hair (151)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHairBlonde" @change="changeAttr($event)" v-model="checkbox.StraightHairBlonde" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHairBlonde" class="form-check-label chLabel">Straight Hair Blonde (144)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StraightHairDark" @change="changeAttr($event)" v-model="checkbox.StraightHairDark" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StraightHairDark" class="form-check-label chLabel">Straight Hair Dark (148)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_StringyHair" @change="changeAttr($event)" v-model="checkbox.StringyHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_StringyHair" class="form-check-label chLabel">Stringy Hair (463)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_TassleHat" @change="changeAttr($event)" v-model="checkbox.TassleHat" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_TassleHat" class="form-check-label chLabel">Tassle Hat (178)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Tiara" @change="changeAttr($event)" v-model="checkbox.Tiara" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Tiara" class="form-check-label chLabel">Tiara (55)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_TopHat" @change="changeAttr($event)" v-model="checkbox.TopHat" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_TopHat" class="form-check-label chLabel">Top Hat (115)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_VR" @change="changeAttr($event)" v-model="checkbox.VR" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_VR" class="form-check-label chLabel">VR (332)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_VampireHair" @change="changeAttr($event)" v-model="checkbox.VampireHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_VampireHair" class="form-check-label chLabel">Vampire Hair (147)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_Vape" @change="changeAttr($event)" v-model="checkbox.Vape" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_Vape" class="form-check-label chLabel">Vape (272)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WeldingGoggles" @change="changeAttr($event)" v-model="checkbox.WeldingGoggles" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WeldingGoggles" class="form-check-label chLabel">Welding Goggles (86)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildBlonde" @change="changeAttr($event)" v-model="checkbox.WildBlonde" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildBlonde" class="form-check-label chLabel">Wild Blonde (144)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildHair" @change="changeAttr($event)" v-model="checkbox.WildHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildHair" class="form-check-label chLabel">Wild Hair (447)</label>
                        </div>
                        <div class="form-group form-check-inline">
                            <div class="chContainer">
                                <input id="filter_id_attr_WildWhiteHair" @change="changeAttr($event)" v-model="checkbox.WildWhiteHair" type="checkbox">
                                <span class="checkmark"></span>
                            </div>
                            <label for="filter_id_attr_WildWhiteHair" class="form-check-label chLabel">Wild White Hair (136)</label>
                        </div>
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
        <div class="container">
            <div class="col-lg-12">
                <div>
                    <form class="row form-group">
                        <div class="form-group col-6">
                            <input @keyup="searchByInputId" placeholder="Search by Id" v-model="searchById" type="number" class="form-control">
                        </div>
                        <button @click="changeFilterShow" aria-controls="example-collapse-text" aria-expanded="false" style="margin-bottom: 5px;" type="button" class="btn crosspunk-btn btn-block col-6 form-control">
                            <img src="/img/cp_button_filter.png" />
                            <i class="fa fa-spinner" ></i>
                            Filter
                        </button>
                    </form>
                </div>
            </div>
            <div class="col">
                <div class="infinite-scroll-component__outerdiv">
                    <div class="infinite-scroll-component " style="height: auto; overflow: auto;">
                        <div class="row">
                            <div v-for="(punk) in punks" v-bind:key="punk.idx" style="margin-bottom: 10px;" class="col">
                                <div style="height: 100%; max-width: 300px; min-width: 210px; margin: 0 auto;" class="card">
                                    <img v-if="crypto_Punks.indexOf(punk.idx) > -1" class="card-img-top pixelated" :src="(`/crypto/${punk.idx}.png`)">
                                    <img v-else class="card-img-top pixelated" :src="(`/crosspunks/punk${punk.idx}.png`)">
                                    <div @click="showDetail(punk.idx)" class="card-body">
                                        <div class="stretched-link card-title h5">CrossPunk {{ punk.idx }}</div>
                                        <div>
                                            <div class="text-muted card-subtitle h6">{{ punk.type == 'Crypto' ? 'Crypto Friend' : punk.type }}</div>
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
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            searchById: '',
            punks: [],
            allPunks: [],
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
            sortBy: {
                token_id_lowest: true
            },
            last_add: false,
            crypto_Punks: [3442, 910, 846, 794, 377, 373, 300, 224, 220, 81, 57]
        }
    },
    mounted() {
        this.filterAttr();
    },
    created() {
        window.onscroll = () => {
            if (document.documentElement.scrollTop + window.innerHeight + 400 > document.documentElement.offsetHeight) {
                this.addPunks();
            }
        }
    },
    methods: {
        addPunks() {
            if (!this.last_add) {
                this.last_add = setTimeout(() => {
                    let l = this.punks.length;

                    for (let i = l; i < l + 60 && i < this.allPunks.length; i++) {
                        this.punks.push(this.allPunks[i]);
                    }

                    clearTimeout(this.last_add);
                    this.last_add = false;
                }, 500);
            }
        },
        showDetail(index) {
            this.$router.push({ name: "details", params: { id: index } });
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
        changeSortBy(e) {
            this.searchById = '';

            for (let ch in this.sortBy) {
                this.sortBy[ch] = (e.target.getAttribute('data-id') == ch);
            }

            setTimeout(() => {
                this.filterAttr();
            }, 200);
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
        filterAttr() {
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
                _allPunksCount = JSON.parse(JSON.stringify(window.punks));
            } else {
                for (let i = 0; i < 10000; i++) {
                    if (active_attr_count.indexOf(window.punks[i].attributes.length + "") > -1)
                        _allPunksCount.push(window.punks[i]);
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

            if (activeType == "all") {
                this.allPunks = _allPunks;
            } else {
                for (let i = 0; i < _allPunks.length; i++) {
                    if (activeType.indexOf(_allPunks[i].type) > -1) {
                        this.allPunks.push(_allPunks[i]);
                    }
                }
            }

            let sortBy = false;
            for (let s in this.sortBy) {
                if (this.sortBy[s])
                    sortBy = s;
            }

            if (sortBy) {
                this.allPunks.sort((a, b) => {
                    if (sortBy === "token_id_lowest") {
                        return a.idx - b.idx;
                    } else if (sortBy === "token_id_highest") {
                        return b.idx - a.idx;
                    } else if (sortBy === "rank_lowest") {
                        return a.rank - b.rank
                    } else if (sortBy === "rank_highest") {
                        return b.rank - a.rank
                    }
                })
            }

            this.punks = [];

            for (let i = 0; i < 60 && i < this.allPunks.length; i++) {
                this.punks.push(this.allPunks[i]);
            }
        },
        changeFilterShow() {
            document.getElementById("mySidebar").style.left = "0px";
            document.getElementById("sidebarCover").classList.remove('hideCover')
        },
        closeSidebar() {
            document.getElementById("mySidebar").style.left = "-320px";
            document.getElementById("sidebarCover").classList.add('hideCover')
        }
    },
};
</script>
