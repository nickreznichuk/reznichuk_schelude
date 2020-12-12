json.array! @records do |record|
  json.extract! record, :id, :name, :procedure, :inst, :phone_number, :price
  json.procedure_date record.record_dt.strftime('%Y-%m-%d %H:%m')
end