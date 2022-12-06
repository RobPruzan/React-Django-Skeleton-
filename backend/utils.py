def filter_list_of_dictionaries(list_to_filter, filter):
    filter_values = set()
    filtered_list = []
    for dic in list_to_filter:
        if not dic.get(filter) in filter_values:
            filter_values.add(dic.get("id"))
            filtered_list.append(dic)
