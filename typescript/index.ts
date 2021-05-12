let a: number = 10;
console.log(a);

// 什么是TS，为什么要学TS，怎么编写，有哪些语言特性
// typescript是JavaScript的带特定类型的超集，经过编译器处理后输出的js文件可以在node、浏览器环境中直接运行
// 四个优势：1、类型检查 2、代码补全 3、便于维护 4、入门门槛较低（js的语法变种）
// 基本语法 + 特殊处理语法
// 变量名后边加: type，即可定义变量类型
let b: boolean = false;
console.log('b: ', b);
function hello(a: number, b: number): number {
    return a + b;
}


// 显示类型定义，隐式类型定义(声明后直接赋值即可隐式定义)
// 基本类型 boolean number string null undefined
// 组合类型 | type
let c: number | string = 1;
type numStr = number | string;
let d: numStr = 1;
// 对象类型 用interface检查
interface myObj1 {
    title: string;
    name: string;
}

let s: myObj1 = {
    title: '',
    name: ''
}
// 数组类型 基本 泛型 元组 tupple
let e: boolean[] = [false, true]
let f: Array<number> = [1]; // 泛型
let g: [string, number] = ['',2];


// 面向对象
// 什么是对象，为什么要面向对象？
// 是一种软件开发方法，对现实世界理解和抽象的方法。

// 对象-属性，内部定义，外部调用，class/object
// 包含实例变量、构造方法、实例方法

// 对象的四个特性
// 封装：把对象的一些属性或方法设置为私有的，通过提供公开的方法让外部调用来修改这些属性，从而避免内部属性被外部直接修改或者访问来保护对象数据
// 抽象：从具体事物抽出、概括出它们共同的方面、本质属性与关系等，而将个别的、非本质的方面、属性与关系舍弃的思维过程。简单来说就是从具体事物中抽取出其中的一些具有概括性特点的东西。也可解释为应用抽象思维的软件开发方法。抽象方法的内部实现外部是不可见的。
// 继承：使得子类具有父类的属性和方法或者重新定义、追加属性和方法等。
// 多态：一种行为多种状态，同一个行为具有多个不同表现形式或形态的能力。三个必要条件：继承、重写



// 技术胖的TS课程笔记，共26课
// https://www.bilibili.com/video/BV1qV41167VD?from=search&seid=11983939001942747329
// 1、2012年微软发布的

// 2、ts的安装、运行
// ts-node

// 3、静态类型：
//  基础静态类型
//  对象静态类型：对象、数组、类、函数

// 4、类型注解、类型推断
// 使用原则：TS能够自动分析变量类型就不写注解，无法分析则需要类型注解（冒号 + 类型的写法，就是类型注解）

// 5、函数参数和返回类型的注解
// void：无返回；never：执行不完（报错后的语句、死循环）
// 对象类型的参数，要用结构的方式去注解对象内的参数类型

// 6、数组类型的注解
// 基础、基础组合、泛型、元组
// 类型别名 type alias
type Lady = {
    name: string;
    age: number;
}

const xiaoliu: Lady[] = [
    {
        name: 'xiaoliu',
        age: 12
    }
]

// 7、元组、类型约束
// 元组平时开发用的不多，在csv等特殊场景的时候需要用到

// 8、接口1：interface
// 代码重用性的体现
// 与类型别名type的区别：type是可以直接写类型，interface必须是花括号的写法
// 可选值 ?:
interface myObj {
    title: string;
    name: string;
}

// 9、接口2：interface
// 任意key、方法返回值、类的implements
interface myObj {
    title: string;
    name: string;
    [propname: string]: any; // 任意key
    say(): string; // 规定方法的返回值为string
}

class test implements myObj {
    title: '';
    name: '';
    say: () => ''
}

// 接口继承
interface mySubObj extends myObj {
    teach(): string;
}

// 10、类及其使用
class Cool {
    content = 'hi';
    sayHi() {
        return this.content;
    }
}

class SubCool extends Cool {
    sayHello() {
        console.log('subcool');
    }
}

const cooler = new Cool();

// 重写overwrite、super
class SubCool2 extends Cool {
    sayHi() {
        return super.sayHi() + this.content;
    }
}

// 11、类的访问类型
// public - 内外都可访问
// privite - 内部访问，不可继承
// protected - 内部使用，可继承
class Person {
    public name: string;
    private sayHi(){};
}

// 12、类的构造函数
class People {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const people = new People('xiaoliu');

// 继承时，子类中要调用父类的构造函数
class Driver extends People {
    constructor() {
        super('');
    }
}

// 13、类的getter、setter、static
class XiaoJieJie {
    constructor(private _age:number){}

    get age(){
        return this._age;
    }

    set age(age:number) {
        this._age = age + 3;
    }
}

const dajiao = new XiaoJieJie(28);
dajiao.age = 25;
console.log(dajiao.age);

// 静态类static，不用实例化可以直接访问类的方法或者属性
class Girl {
    static sayLove() {
        return 'I love you!';
    }
}

// const girl = new Girl(); // 不用实例化
console.log(Girl.sayLove())


// 14、只读属性和抽象类
// 只读属性readonly，不可更改
class Person2 {
    public readonly _name: string;
    constructor(name: string) {
        this._name = name;
    }
}

// 抽象类
abstract class Teacher { // 抽象类
    abstract skill(); // 抽象方法，其子类必须都有这个方法
}

// 15、配置文件tsconfig.json
// 是ts编译的配置文件
// 可以用 tsc -init 来初始化
// 执行 tsc 的时候使用配置文件来编译配置文件中包含的文件
// 执行 tsc xxx.xx 具体指定某个文件时不会走配置文件

// 16 - 17、配置文件 - compiler Options
// include、exclude、files、strict...
// rootDir、outDir、sourceMap（可以认为时编译映射，源文件到编译后文件的映射）、noUnusedLocals、noUnusedParameters

// 18、联合类型（组合类型）和类型保护（类型守护）
interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher2 {
    anjiao: boolean;
    skill: () => {};
}

function judgeWho(animal: Waiter | Teacher2) {
    // animal.say(); // 直接调用say方法会报错，因Teacher2接口没有say

    // 类型保护方法1：断言
    if (animal.anjiao) {
        (animal as Teacher2).skill();
    } else {
        (animal as Waiter).say();
    }

    // 类型保护方法2：方法判断
    if ('skill' in animal) {
        animal.skill();
    } else {
        animal.say();
    }

    // 类型保护方法3：typeof、instanceof - 类
    // 代码省略
}


// 19、枚举类型 - enum，ts独有的 es中没有这个类型
const stat = {
    HAPPY: 0,
    SAD: 1
}

// 改写为枚举类型，默认从 0 开始递增的数字，可指定开始的数值
// 类似定长的数组，可以通过脚标获取值 stat2.HAPPY === 1, stat2[2] === 'HAPPY'
enum stat2 {
    HAPPY = 2,
    SAD
}

function getStatus(stat: number, stat2: number) {
    console.log(stat);
    console.log(stat2);
}

getStatus(stat.HAPPY, stat2.SAD);


// 20、泛型 - 函数中的泛型
function join<T, P>(first: T, second: P) {
    return `${first} ${second}`
}

join<number | string, string>(1, '2');

function genericArray<T>(params: Array<T>) {
    return params;
}

genericArray<string | number>([1, 2]);


// 21、泛型 - 类中的泛型
interface Girl21 {
    name: string;
}

class SelcetGirl<T extends Girl21> { // 泛型的约束，extends可以时基本类型、组合类型、接口
    constructor(private girls: T[]) {
        
    }

    getGirl(index: number): T {
        return this.girls[index];
    }
}

const selectGirl = new SelcetGirl<Girl21>([
    {
        name: '1',
    },
    {
        name: '2',
    },
]);

console.log('selectGirl: ', selectGirl.getGirl(1));


// 22、命名空间 - namespace 基本，防止全局变量污染，简单的可以认为是 TS 提供的一种模块化方法
// 基本的 TS 项目结构、配置：package.json tsconfig.json index.html ./build ./src
namespace PageHome {
    class Header {
        
    }
    class Body {

    }
    class Footer {

    }

    class page {
        constructor() {
            new Componets.Header();
            new Body();
        }
    }
}

// 23、命名空间 - namespace export， tsconfig.json 中设置 outFile 可以输出到单一文件，设置后 module 不能是 commonjs 类型
namespace Componets {
    export class Header {
        
    }

    export namespace SubComponents { // 子命名空间
        export class SubHeader {
        
        }
    }
}


// 24、import 的使用，namespace 的一种替代写法

// 25、用 Parcel 打包 TS 代码
// 一款崛起中的构建工具，比 webpack 的学习成本低很多，配置项更简单些

// 26、在 TS 中使用其他类库
// index.html 中引入 jQuery.js
// 源码中引入 jquery.d.ts 的声明文件，或者执行 npm i @types/jquery

// ---------------------------------------------------------------
// ---------------------------------------------------------------

// 大前端高薪训练营 - TS 课程笔记，共 44 课
// https://www.bilibili.com/video/BV14N411Q7WY

// 1、课程概述 - 解决 JS 自有类型系统的不足
// 内容概要：强弱类型、静动态类型、JS 自有类型问题、flow、TS 语言规范与基本应用

// 2、类型系统 - 类型安全
// 类型安全：强类型、弱类型 - 实参类型与形参类型是否相同来区分。
// 不是权威机构的定义，强类型有更强的类型约束，强类型不允许隐式类型转换。

// 3、类型系统 - 类型检查
// 类型检查：静态类型、动态类型
// 静态类型：一个变量声明时它的类型就是明确的，声明后不能修改。
// 动态类型：运行阶段才能够明确变量类型，且变量类型可以改变。
// 不要混淆类型安全与类型检查的分类维度，不是说强类型就是静态类型的，例如python。

// 4、JS类型系统特征
// 弱类型 + 动态类型 => 缺失了类型的可靠性
// 为什么：历史原因的 js 设计的是简单应用、js没有编译环节
// 大规模应用时，灵活就变成了短板。

// 5、弱类型的问题
// 运行时检查不方便，类型不明确造成函数功能偏差，隐式类型转换不易于理解
// 原来的约定方式不够严谨，强类型的约束有利于大型项目的健壮性

// 6、强类型的优势
// 错误更早暴露（编译时）、代码更智能更准确、重构更牢靠、减少不必要的类型判断

// 7、Flow 概述
// 2014年，Facebook 推出的一款 js 类型检查器，是个小工具，npm 的模块，很简单易上手
// 通过对变量添加注解的方式来约定变量类型
// 类型注解：同 TS

// 8、Flow 快速上手
// yarn add flow-bin
// 页面开头添加 // @flow 来在 flow 执行时的检查
// 执行 flow 的命令检查，在终端中提示结果

// 9、Flow 编译和移除注解
// flow 的类型注解是 js 不认识的，编码完成后需要移除 flow 的注解，可以使用 flow-remove-types 模块、Babel 的插件
// 源码编写和最终代码之间加入编译过程，来实现类型的检查的。

// 10、Flow 开放工具插件
// 提升只能在终端中展示的体验，可以使用编辑器插件 flow (官方有提供)

// 11、Flow 类型推断 type inference
// 不建议使用 类似TS

// 12、Flow 类型注解
// 类似 TS

// 13-18、Flow 类型
// 原始类型：string、number、boolean、undefined（void）、null、symbol
// 数组类型：基本，泛型const arr1: Array<number> = [1, 2, 3]，元组
// 对象类型：键值的类型注解
// 函数类型：形参、返回值、函数本身的注解
// 特殊类型：字面量类型（一般在组合/联合类型中使用）、maybe（?:、|）、mixed（所有类型的联合类型，强类型，不做类型判断语法会报错）、any（也是所有类型的联合类型，弱类型，不做类型判断语法层面也不会出错，主要用于兼容老代码）

// 19、类型小结：学习 Flow 是为了学习 react 源码时能够理解。

// 20、Flow 运行环境 API
// core、dom、bom、cssdom、node
// 内置对象：HTMLElement

// 21、TS 概述
// TS 是 JS 的超集，TS 编译后生成原始 JS 代码
// typescript = js + es6+ + 类型系统
// 功能更强大、生态更健全更完善
// 缺点：语音本身多了很多新概念，会提高学习成本；项目初期，TS会增加一些成本。
// 渐进式会适当降低成本

// 22、TS 快速上手
// TS 是 npm 的模块

// 23、TS 配置文件
// target 标准库配置...
// 标准库：内置对象所对应的声明
// tsc 运行在整个项目内时配置文件才会生效

// 24-25、TS 原始类型
// 类似 Flow 中的类型注解 : type
const a24: string = 'string';
const b24: number = 100; // NaN Infinity
const c24: boolean = false;
const d24: void = undefined; // null 也可以
const e24: null = null;
const f24: undefined = undefined;
const g24: symbol = Symbol();

// 26、TS 中文错误消息
// 终端中的显示文字修改：执行 tsc --locale zh-CN
// VS code 中显示中文修改：在 settings 面板搜索 typescript 修改 locale 字段为 zh-CN

// 27、TS 作用域问题
// IIFE、export 的模块方式

// 28、TS 对象类型
const foo281: object = function() {} // [] {} 都可以
const foo282: { foo: string } = { foo: '' } // 对象的限制可以对象字面量的方式，最好用 interface 类型

// 29、TS 数组类型
// 30、TS 元组类型
// 31、TS 枚举类型 默认数值、设定初始数值、自定义各个数值、字符串枚举

// 32、TS 函数类型
// 参数注解、返回值注解、函数的注解（箭头函数）

// 33、TS 任意类型
// any 是动态类型的，TS不会去做检查，语法层面不会报错，兼容老代码时使用

// 34、TS 隐式类型推断 根据变量使用情况推断变量类型 建议都显示的书写
let age34 = 18;
// age34 = '';

// 35、TS 类型断言 辅助明确类型的确定，编译时的概念，不是类型转换
const nums35 = [110, 111, 112, '22'];
const res = nums35.find(i => i > 0);
// const square = res * res; // 无法明确 res 的类型

const num351 = res as number;
const num352 = <number>res; // JSX 中会和 html 标签冲突，不建议使用

// 36-37、TS 接口 interface
// 可以用于约定对象的描述，成员及其类型
interface Post {
    title: string, // 接口的尾部可以用逗号、分号、或者省略，根据
    subtitle?: string // 可选成员
    readonly summary: string; // 只读成员
    [prop: string]: string; // 动态成员
    content: string;
}

const poster: Post = {
    title: 'test',
    content: 'test content',
    summary: 'test summary',
    other: ''
}

// 38、TS 类的基本使用
// 类：用来描述一类具体对象的抽象成员，有继承

// 39、TS 类的访问修饰符 public、private（不可继承）、protected（可继承）、static

// 40、TS 类的只读属性 readonly 在类型声明中或者构造函数中初始化

// 41、TS 类与接口
// 多思考，多结合生活，多实践
// implements
// 用接口去抽象类

// 42、TS 抽象类
// 更大的类目用抽象类
// 抽象类只能在继承后实例化，本身不能实例化
abstract class Animal {
    constructor() {
        
    }
}

// new Animal() // 无法创建抽象类的实例。

class Dog extends Animal {
    constructor() {
        super();
    }
}

// 43、TS 泛型
// 在指定类型时没有具体指定的约定，在调用时传入类型参数，目的在于最大程度的做代码复用
function creatArray<T> (length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value);
    return arr;
}

const res43 = creatArray<string>(3, '');

// 44、TS 类型声明
// declare 关键字
// 用于兼容常用的 js 模块
// 类型声明文件 xx.d.ts
