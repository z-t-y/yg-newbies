import Navbar from "./Navbar"

export default function Zysx() {
    return (<>
        <Navbar />
        <div className="custom-container">
            <ol>
                <li>我们这届有12个班级，其中3、5、7、9为实验班，其余为平行班，共508人</li>
                <li>高一考试科目十门（语文 数学 英语 物理 化学 生物 政治 历史 地理 信息）
                    其中（物理 化学 生物 政治 历史 地理）所有人需要六选三作为高考科目，不选的三门通过合格考即可，
                    信息学科高一下通过合格考即可</li>
                <li>早上7:25前后进班（具体看各班班主任要求），周一-周四5:05放学，周五一般16:15，但均不确定，视具体通知而定</li>
                <li>住宿生、走读生都可以带手机，住宿生可以放在宿舍，走读生进班交到手机柜，放学拿，其他电子设备理论上不带为好</li>
                <li>学校无春秋游，有艺术节、科技节、运动会和体育大联赛</li>
            </ol>
        </div>
    </>)
}