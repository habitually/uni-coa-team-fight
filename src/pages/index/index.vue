<template>
	<view class="containner overflow-hidden">
		<view class="header mt-8 flex items-center">
			<image class="avatar avatar-user rounded-lg" src="/static/logo.png" @click="showPreview = true" />
			<view class="ml-4 flex flex-col">
				<view class="">老板端</view>
				<view class="">cho</view>
			</view>
		</view>
		<view class="mt-6">
			<view class="text-gray-400">卡券余额</view>
			<view class="mt-2 flex justify-between items-center">
				<view class="text-3xl">200 (张)</view>
				<view class="text-indigo-400" @tap="handleGetCoupon">获取</view>
			</view>
		</view>
		<vin-tabs class="mt-6" v-model="state.tabValue">
			<vin-tabpane title="极速匹配" pane-key="0">
				<vin-noticebar direction="vertical" :list="horseLamp1" :speed="10" :standTime="5000" :background="`transparent`" :color="`#D9500B`">
					<template v-slot:rightIcon>
						<vin-icon type="trolley" color="#f0250f"></vin-icon>
					</template>
				</vin-noticebar>
				<view class="btn btn-instance btn-instance_moqi" @tap="switchActionSheet('isVisible1')">魔 棋 战 局</view>
				<view class="btn btn-instance btn-instance_lizhan" @tap="switchActionSheet('isVisible1')">历 战 试 炼</view>
				<view class="btn btn-instance btn-instance_tansuo" @tap="switchActionSheet('isVisible1')">探 索 满 星</view>
				<view class="btn btn-instance btn-instance_daigan" @tap="switchActionSheet('isVisible1')">体 力 代 肝</view>
			</vin-tabpane>
			<vin-tabpane title="我的房间" pane-key="1">
				<MyRoom />
			</vin-tabpane>
			<vin-tabpane title="历史记录" pane-key="2">历史记录</vin-tabpane>
		</vin-tabs>
		<!-- <vin-image-preview
            :show="showPreview"
            :images="imgData"
            @close="showPreview = false"
        /> -->
		<vin-action-sheet v-model:visible="state.moqiTypeVisible" :menu-items="menuItemsOne" @choose="chooseItem" description="选择模式"></vin-action-sheet>
		<vin-action-sheet v-model:visible="state.lizhanTypeVisible" :menu-items="menuItemsOne" @choose="chooseItem" description="选择模式"></vin-action-sheet>
		<vin-action-sheet v-model:visible="state.tansouTypeVisible" :menu-items="menuItemsOne" @choose="chooseItem" description="选择模式"></vin-action-sheet>
		<vin-action-sheet v-model:visible="state.daiganTypeVisible" :menu-items="menuItemsOne" @choose="chooseItem" description="选择模式"></vin-action-sheet>
		
	</view>
</template>

<script setup lang="ts" name="index">
import { ref, reactive } from 'vue';
import { useRouter } from 'uni-mini-router';
// import coas from '@/static/logo.png';
import { useAppStore } from '@/state/app';
import { getlist } from '@/api/common/user/user';

import MyRoom from './MyRoom.vue'
// import vinButton from '@vingogo/uni-ui/lib/components/button/index.vue';

const router = useRouter();
const usetsto = useAppStore();

let env = import.meta.env.VITE_APP_ENV;
let api = import.meta.env.VITE_BASE_URL;

const title = ref('Tailwind CSS');

const showPreview = ref(false);

const state = reactive({
	tabValue: '0',
	moqiTypeVisible: false,
	lizhanTypeVisible: false,
	tansouTypeVisible: false,
	daiganTypeVisible: false,
	val: '',
	current1: 1
});
const menuItemsOne = [
	{
		name: '合力将军-故事模式 (6-10券/次)'
	},
	{
		name: '合力将军-精英模式 (20-30券/次)'
	},
	{
		name: '皇后加冕-故事模式 (40券/次)'
	},
	{
		name: '皇后加冕-精英模式 (1800券/次)'
	}
];
const switchActionSheet = () => {
	state.moqiTypeVisible = !state.moqiTypeVisible;
};
const chooseItem = (itemParams) => {
	state.val = itemParams.name;
	state.tabValue = '1';
};

const handleGetCoupon = () => {
	
};

const handleClickStep = (index) => {
	console.log(index);
};

	
const handleNext = () => {
	if (state.current1 < 3) {
		state.current1++;
	}
}

const horseLamp1 = ref(['打手 压海棠 刚刚上线了', '老板 霸王龙 正在寻求匹配-魔棋战局', '打手 源,切 正在等待老板上车-魔棋战局']);

// let name = 1312;

// let name = 1321;

// const imgData = [
//     {
//         src: coas,
//     },
// ];

// 跳转路由
function push() {
	router.push({
		name: 'wode'
	});
}

// 请求api
function apis() {
	getlist({ id: 1 }).then((res) => {
		console.log(res, '我点击了');
	});
}

const checkMoqi = () => {};
</script>

<style lang="scss">
.containner {
	padding: 0 24rpx;
	color: #fff;
	height: 100%;
	overflow: auto;
	min-height: 100vh;
	background: linear-gradient(180deg, rgba(13, 12, 12, 1) 0%, rgba(8, 8, 31, 0.6) 100%);
	display: flex;
	flex-direction: column;
}


:deep(.vin-image-preview-custom-pop) {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background: transparent !important;
}

.btn-instance {
	height: 120rpx;
	line-height: 120rpx;
	width: 100%;
	margin-bottom: 24rpx;
}

.btn-instance_moqi {
	background: linear-gradient(90deg, rgba(51, 151, 180, 1) 8.03%, rgba(245, 2, 43, 1) 93.09%);
}

.btn-instance_lizhan {
	background-color: #ac33c1;
}

.btn-instance_tansuo {
	background-color: #4b21cc;
}

.btn-instance_daigan {
	background-color: #2f2c36;
}

.place {
}


</style>
