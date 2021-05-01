# 年终奖征税方式选择器

# 累计税率免征额
base = 60000

# 累计税率
# 1	不超过36, 000元的部分	3	0
# 2	超过36, 000元至144, 000元的部分	10	2520
# 3	超过144, 000元至300, 000元的部分	20	16920
# 4	超过300, 000元至420, 000元的部分	25	31920
# 5	超过420, 000元至660, 000元的部分	30	52920
# 6	超过660, 000元至960, 000元的部分	35	85920
# 7	超过960, 000元的部分	45	181920
table = [
    [36000, 0.03, 0],
    [144000, 0.1, 2520],
    [300000, 0.2, 16920],
    [420000, 0.25, 31920],
    [620000, 0.3, 52920],
    [960000, 0.35, 85920],
    [100000000, 0.45, 181920]
]

# 年终奖金12月分摊方式税率表
table2 = [
    [3000, 0.03, 0],
    [12000, 0.1, 210],
    [25000, 0.2, 1410],
    [35000, 0.25, 2660],
    [55000, 0.3, 4410],
    [80000, 0.35, 7160],
    [100000000, 0.45, 15160]
]


# 累计税率算法的税
def get_money(money):
    if money <= 0:
        return 0
    for item in table:
        if money <= item[0]:
            return money * item[1] - item[2]


# 年终奖12月分摊方式的税
def get_money_year(money):
    if money <= 0:
        return 0
    month_money = money / 12
    for item in table:
        if month_money <= item[0]:
            return money * item[1] - item[2]


def month_moneys(arr, single_money):
    sum_money = sum(arr)
    money = sum_money - base
    shui1 = get_money(money)
    shui2 = get_money_year(single_money)
    shui = shui1 + shui2
    log = "个人所得:{:.2f}\t累计税应纳税所得额:{:.2f}\t奖金:{:.2f}\t奖金税:{:.2f}\t累计税:{:.2f}\t应纳税:{:.2f}".format(sum_money + single_money, money, single_money , shui2, shui1, shui)
    print(log)


def main():
    moneys = [36001,
              10000,
              10001,
              10002,
              10003,
              10004,
              10005,
              10006,
              10007,
              10008,
              10009,
              10010,
              10011]
    moneys.sort(reverse=True)
    print(moneys)
    print('---------------------------')
    # 不区分年终奖
    month_moneys(moneys, 0)
    for i in range(len(moneys)):
        single_money = moneys[i]
        others = moneys[:i] + moneys[i + 1:]
        month_moneys(others, single_money)


if __name__ == '__main__':
    main()

